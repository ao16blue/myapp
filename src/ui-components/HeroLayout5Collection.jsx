/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { HeroImages } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import HeroLayout5 from "./HeroLayout5";
import { Collection } from "@aws-amplify/ui-react";
export default function HeroLayout5Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: HeroImages,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout5Collection")}
    >
      {(item, index) => (
        <HeroLayout5
          hero={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></HeroLayout5>
      )}
    </Collection>
  );
}
