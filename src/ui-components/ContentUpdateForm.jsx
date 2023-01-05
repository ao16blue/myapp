/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Content } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ContentUpdateForm(props) {
  const {
    id,
    content,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Author: {},
    Category: {},
    title: undefined,
    thumb: undefined,
    description: undefined,
    content: undefined,
    contentAuthorId: undefined,
    contentCategoryId: undefined,
  };
  const [Author, setAuthor] = React.useState(initialValues.Author);
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [title, setTitle] = React.useState(initialValues.title);
  const [thumb, setThumb] = React.useState(initialValues.thumb);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [content, setContent] = React.useState(initialValues.content);
  const [contentAuthorId, setContentAuthorId] = React.useState(
    initialValues.contentAuthorId
  );
  const [contentCategoryId, setContentCategoryId] = React.useState(
    initialValues.contentCategoryId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...contentRecord };
    setAuthor(cleanValues.Author);
    setCategory(cleanValues.Category);
    setTitle(cleanValues.title);
    setThumb(cleanValues.thumb);
    setDescription(cleanValues.description);
    setContent(cleanValues.content);
    setContentAuthorId(cleanValues.contentAuthorId);
    setContentCategoryId(cleanValues.contentCategoryId);
    setErrors({});
  };
  const [contentRecord, setContentRecord] = React.useState(content);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Content, id) : content;
      setContentRecord(record);
    };
    queryData();
  }, [id, content]);
  React.useEffect(resetStateValues, [contentRecord]);
  const validations = {
    Author: [],
    Category: [],
    title: [],
    thumb: [],
    description: [],
    content: [],
    contentAuthorId: [],
    contentCategoryId: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Author,
          Category,
          title,
          thumb,
          description,
          content,
          contentAuthorId,
          contentCategoryId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Content.copyOf(contentRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ContentUpdateForm")}
    >
      <SelectField
        label="Author"
        placeholder="Please select an option"
        isDisabled={false}
        value={Author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Author: value,
              Category,
              title,
              thumb,
              description,
              content,
              contentAuthorId,
              contentCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.Author ?? value;
          }
          if (errors.Author?.hasError) {
            runValidationTasks("Author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("Author", Author)}
        errorMessage={errors.Author?.errorMessage}
        hasError={errors.Author?.hasError}
        {...getOverrideProps(overrides, "Author")}
      ></SelectField>
      <SelectField
        label="Category"
        placeholder="Please select an option"
        isDisabled={false}
        value={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Author,
              Category: value,
              title,
              thumb,
              description,
              content,
              contentAuthorId,
              contentCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></SelectField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        defaultValue={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Author,
              Category,
              title: value,
              thumb,
              description,
              content,
              contentAuthorId,
              contentCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Thumb"
        isRequired={false}
        isReadOnly={false}
        defaultValue={thumb}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Author,
              Category,
              title,
              thumb: value,
              description,
              content,
              contentAuthorId,
              contentCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.thumb ?? value;
          }
          if (errors.thumb?.hasError) {
            runValidationTasks("thumb", value);
          }
          setThumb(value);
        }}
        onBlur={() => runValidationTasks("thumb", thumb)}
        errorMessage={errors.thumb?.errorMessage}
        hasError={errors.thumb?.hasError}
        {...getOverrideProps(overrides, "thumb")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Author,
              Category,
              title,
              thumb,
              description: value,
              content,
              contentAuthorId,
              contentCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        defaultValue={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Author,
              Category,
              title,
              thumb,
              description,
              content: value,
              contentAuthorId,
              contentCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Content author id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={contentAuthorId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Author,
              Category,
              title,
              thumb,
              description,
              content,
              contentAuthorId: value,
              contentCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.contentAuthorId ?? value;
          }
          if (errors.contentAuthorId?.hasError) {
            runValidationTasks("contentAuthorId", value);
          }
          setContentAuthorId(value);
        }}
        onBlur={() => runValidationTasks("contentAuthorId", contentAuthorId)}
        errorMessage={errors.contentAuthorId?.errorMessage}
        hasError={errors.contentAuthorId?.hasError}
        {...getOverrideProps(overrides, "contentAuthorId")}
      ></TextField>
      <TextField
        label="Content category id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={contentCategoryId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Author,
              Category,
              title,
              thumb,
              description,
              content,
              contentAuthorId,
              contentCategoryId: value,
            };
            const result = onChange(modelFields);
            value = result?.contentCategoryId ?? value;
          }
          if (errors.contentCategoryId?.hasError) {
            runValidationTasks("contentCategoryId", value);
          }
          setContentCategoryId(value);
        }}
        onBlur={() =>
          runValidationTasks("contentCategoryId", contentCategoryId)
        }
        errorMessage={errors.contentCategoryId?.errorMessage}
        hasError={errors.contentCategoryId?.hasError}
        {...getOverrideProps(overrides, "contentCategoryId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
