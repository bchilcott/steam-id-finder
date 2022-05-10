import { Button, FormControl, FormErrorMessage, Flex } from "@chakra-ui/react";
import {
  Field,
  FieldInputProps,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import { useState } from "react";
import { useAppDispatch } from "../util/hooks";
import { setData } from "../util/slices/data.slice";
import Input from "./Input";

interface FormValues {
  steamURL: string;
}

export default function MainForm() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const regex =
    /^https:\/\/steamcommunity.com\/sharedfiles\/filedetails\/\?id=([0-9]+)\S*$/is;

  const initialValues: FormValues = {
    steamURL: "",
  };

  const validateSteamURL = (value: string): string => {
    let error: string = "";
    if (!value) {
      error = "Steam URL is required";
    } else if (!regex.test(value)) {
      error = "Invalid Steam URL";
    }
    return error;
  };

  const submitForm = (
    values: FormValues,
    _actions: FormikHelpers<FormValues>
  ) => {
    const matches = regex.exec(values.steamURL);
    if (!matches) return;
    setLoading(true);

    fetch("api/collection?id=" + matches[1])
      .then((res) => res.json())
      .then((data) => {
        dispatch(setData(data.data));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitForm}>
      <Form style={{ width: "100%" }}>
        <Flex>
          <Field name="steamURL" validate={validateSteamURL}>
            {({
              field,
              form,
            }: {
              field: FieldInputProps<string>;
              form: FormikProps<FormValues>;
            }) => (
              <FormControl
                isInvalid={!!form.errors.steamURL && !!form.touched.steamURL}
              >
                <Input {...field} placeholder="Steam URL" />
                <FormErrorMessage>{form.errors.steamURL}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
            type="submit"
            colorScheme={"blue"}
            ml="10px"
            isLoading={loading}
          >
            Import
          </Button>
        </Flex>
      </Form>
    </Formik>
  );
}
