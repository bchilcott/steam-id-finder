import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";

const API_KEY = process.env.STEAM_KEY;
const COLLECTION_URL = `https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/`;
const CHILDREN_URL = `https://api.steampowered.com/ISteamRemoteStorage/GetCollectionDetails/v1/`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id?.toString();
  const collectionData = await getCollectionData(id);
  const collectionChildren = await getCollectionChildren(id);

  const resBody = {
    title: collectionData.title,
    description: collectionData.description,
    previewUrl: collectionData.preview_url,
    children: await collectionChildren.map(
      (child: any) => child.publishedfileid
    ),
  };

  res.status(200).json({ data: resBody });
};

async function getCollectionData(id: string) {
  var formData = new FormData();
  formData.append("key", API_KEY);
  formData.append("itemcount", "1");
  formData.append("publishedfileids[0]", id);

  var config = {
    method: "post",
    url: COLLECTION_URL,
    headers: {
      ...formData.getHeaders(),
    },
    data: formData,
  };

  const res = await axios(config);
  return res.data.response.publishedfiledetails[0];
}

async function getCollectionChildren(id: string) {
  var formData = new FormData();
  formData.append("key", API_KEY);
  formData.append("collectioncount", "1");
  formData.append("publishedfileids[0]", id);

  var config = {
    method: "post",
    url: CHILDREN_URL,
    headers: {
      ...formData.getHeaders(),
    },
    data: formData,
  };

  const res = await axios(config);
  return res.data.response.collectiondetails[0].children;
}
