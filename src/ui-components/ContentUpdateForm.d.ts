/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Content } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContentUpdateFormInputValues = {
    Author?: string;
    Category?: string;
    title?: string;
    thumb?: string;
    description?: string;
    content?: string;
    contentAuthorId?: string;
    contentCategoryId?: string;
};
export declare type ContentUpdateFormValidationValues = {
    Author?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    thumb?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    contentAuthorId?: ValidationFunction<string>;
    contentCategoryId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentUpdateFormOverridesProps = {
    ContentUpdateFormGrid?: FormProps<GridProps>;
    Author?: FormProps<SelectFieldProps>;
    Category?: FormProps<SelectFieldProps>;
    title?: FormProps<TextFieldProps>;
    thumb?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    content?: FormProps<TextFieldProps>;
    contentAuthorId?: FormProps<TextFieldProps>;
    contentCategoryId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContentUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    content?: Content;
    onSubmit?: (fields: ContentUpdateFormInputValues) => ContentUpdateFormInputValues;
    onSuccess?: (fields: ContentUpdateFormInputValues) => void;
    onError?: (fields: ContentUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ContentUpdateFormInputValues) => ContentUpdateFormInputValues;
    onValidate?: ContentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContentUpdateForm(props: ContentUpdateFormProps): React.ReactElement;
