/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeroLayout5Props } from "./HeroLayout5";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type HeroLayout5CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HeroLayout5Props;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function HeroLayout5Collection(props: HeroLayout5CollectionProps): React.ReactElement;
