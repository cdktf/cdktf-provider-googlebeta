// https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigqueryAnalyticsHubListingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Categories of the listing. Up to two categories are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#categories GoogleBigqueryAnalyticsHubListing#categories}
  */
  readonly categories?: string[];
  /**
  * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#data_exchange_id GoogleBigqueryAnalyticsHubListing#data_exchange_id}
  */
  readonly dataExchangeId: string;
  /**
  * Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#description GoogleBigqueryAnalyticsHubListing#description}
  */
  readonly description?: string;
  /**
  * Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#display_name GoogleBigqueryAnalyticsHubListing#display_name}
  */
  readonly displayName: string;
  /**
  * Documentation describing the listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#documentation GoogleBigqueryAnalyticsHubListing#documentation}
  */
  readonly documentation?: string;
  /**
  * Base64 encoded image representing the listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#icon GoogleBigqueryAnalyticsHubListing#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#id GoogleBigqueryAnalyticsHubListing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#listing_id GoogleBigqueryAnalyticsHubListing#listing_id}
  */
  readonly listingId: string;
  /**
  * The name of the location this data exchange listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#location GoogleBigqueryAnalyticsHubListing#location}
  */
  readonly location: string;
  /**
  * Email or URL of the primary point of contact of the listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#primary_contact GoogleBigqueryAnalyticsHubListing#primary_contact}
  */
  readonly primaryContact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#project GoogleBigqueryAnalyticsHubListing#project}
  */
  readonly project?: string;
  /**
  * Email or URL of the request access of the listing. Subscribers can use this reference to request access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#request_access GoogleBigqueryAnalyticsHubListing#request_access}
  */
  readonly requestAccess?: string;
  /**
  * bigquery_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#bigquery_dataset GoogleBigqueryAnalyticsHubListing#bigquery_dataset}
  */
  readonly bigqueryDataset: GoogleBigqueryAnalyticsHubListingBigqueryDataset;
  /**
  * data_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#data_provider GoogleBigqueryAnalyticsHubListing#data_provider}
  */
  readonly dataProvider?: GoogleBigqueryAnalyticsHubListingDataProvider;
  /**
  * publisher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#publisher GoogleBigqueryAnalyticsHubListing#publisher}
  */
  readonly publisher?: GoogleBigqueryAnalyticsHubListingPublisher;
  /**
  * restricted_export_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#restricted_export_config GoogleBigqueryAnalyticsHubListing#restricted_export_config}
  */
  readonly restrictedExportConfig?: GoogleBigqueryAnalyticsHubListingRestrictedExportConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#timeouts GoogleBigqueryAnalyticsHubListing#timeouts}
  */
  readonly timeouts?: GoogleBigqueryAnalyticsHubListingTimeouts;
}
export interface GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources {
  /**
  * Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#table GoogleBigqueryAnalyticsHubListing#table}
  */
  readonly table?: string;
}

export function googleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesToTerraform(struct?: GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function googleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesToHclTerraform(struct?: GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
    }
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}

export class GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference {
    return new GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigqueryAnalyticsHubListingBigqueryDataset {
  /**
  * Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#dataset GoogleBigqueryAnalyticsHubListing#dataset}
  */
  readonly dataset: string;
  /**
  * selected_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#selected_resources GoogleBigqueryAnalyticsHubListing#selected_resources}
  */
  readonly selectedResources?: GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[] | cdktf.IResolvable;
}

export function googleBigqueryAnalyticsHubListingBigqueryDatasetToTerraform(struct?: GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference | GoogleBigqueryAnalyticsHubListingBigqueryDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
    selected_resources: cdktf.listMapper(googleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesToTerraform, true)(struct!.selectedResources),
  }
}


export function googleBigqueryAnalyticsHubListingBigqueryDatasetToHclTerraform(struct?: GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference | GoogleBigqueryAnalyticsHubListingBigqueryDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_resources: {
      value: cdktf.listMapperHcl(googleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesToHclTerraform, true)(struct!.selectedResources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryAnalyticsHubListingBigqueryDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._selectedResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedResources = this._selectedResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryAnalyticsHubListingBigqueryDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataset = undefined;
      this._selectedResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataset = value.dataset;
      this._selectedResources.internalValue = value.selectedResources;
    }
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // selected_resources - computed: false, optional: true, required: false
  private _selectedResources = new GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList(this, "selected_resources", false);
  public get selectedResources() {
    return this._selectedResources;
  }
  public putSelectedResources(value: GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[] | cdktf.IResolvable) {
    this._selectedResources.internalValue = value;
  }
  public resetSelectedResources() {
    this._selectedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedResourcesInput() {
    return this._selectedResources.internalValue;
  }
}
export interface GoogleBigqueryAnalyticsHubListingDataProvider {
  /**
  * Name of the data provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#name GoogleBigqueryAnalyticsHubListing#name}
  */
  readonly name: string;
  /**
  * Email or URL of the data provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#primary_contact GoogleBigqueryAnalyticsHubListing#primary_contact}
  */
  readonly primaryContact?: string;
}

export function googleBigqueryAnalyticsHubListingDataProviderToTerraform(struct?: GoogleBigqueryAnalyticsHubListingDataProviderOutputReference | GoogleBigqueryAnalyticsHubListingDataProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    primary_contact: cdktf.stringToTerraform(struct!.primaryContact),
  }
}


export function googleBigqueryAnalyticsHubListingDataProviderToHclTerraform(struct?: GoogleBigqueryAnalyticsHubListingDataProviderOutputReference | GoogleBigqueryAnalyticsHubListingDataProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_contact: {
      value: cdktf.stringToHclTerraform(struct!.primaryContact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryAnalyticsHubListingDataProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryAnalyticsHubListingDataProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryContact = this._primaryContact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryAnalyticsHubListingDataProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._primaryContact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._primaryContact = value.primaryContact;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
  }
}
export interface GoogleBigqueryAnalyticsHubListingPublisher {
  /**
  * Name of the listing publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#name GoogleBigqueryAnalyticsHubListing#name}
  */
  readonly name: string;
  /**
  * Email or URL of the listing publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#primary_contact GoogleBigqueryAnalyticsHubListing#primary_contact}
  */
  readonly primaryContact?: string;
}

export function googleBigqueryAnalyticsHubListingPublisherToTerraform(struct?: GoogleBigqueryAnalyticsHubListingPublisherOutputReference | GoogleBigqueryAnalyticsHubListingPublisher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    primary_contact: cdktf.stringToTerraform(struct!.primaryContact),
  }
}


export function googleBigqueryAnalyticsHubListingPublisherToHclTerraform(struct?: GoogleBigqueryAnalyticsHubListingPublisherOutputReference | GoogleBigqueryAnalyticsHubListingPublisher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_contact: {
      value: cdktf.stringToHclTerraform(struct!.primaryContact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryAnalyticsHubListingPublisherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryAnalyticsHubListingPublisher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryContact = this._primaryContact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryAnalyticsHubListingPublisher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._primaryContact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._primaryContact = value.primaryContact;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
  }
}
export interface GoogleBigqueryAnalyticsHubListingRestrictedExportConfig {
  /**
  * If true, enable restricted export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#enabled GoogleBigqueryAnalyticsHubListing#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If true, restrict export of query result derived from restricted linked dataset table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#restrict_query_result GoogleBigqueryAnalyticsHubListing#restrict_query_result}
  */
  readonly restrictQueryResult?: boolean | cdktf.IResolvable;
}

export function googleBigqueryAnalyticsHubListingRestrictedExportConfigToTerraform(struct?: GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference | GoogleBigqueryAnalyticsHubListingRestrictedExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    restrict_query_result: cdktf.booleanToTerraform(struct!.restrictQueryResult),
  }
}


export function googleBigqueryAnalyticsHubListingRestrictedExportConfigToHclTerraform(struct?: GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference | GoogleBigqueryAnalyticsHubListingRestrictedExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_query_result: {
      value: cdktf.booleanToHclTerraform(struct!.restrictQueryResult),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryAnalyticsHubListingRestrictedExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._restrictQueryResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictQueryResult = this._restrictQueryResult;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryAnalyticsHubListingRestrictedExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._restrictQueryResult = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._restrictQueryResult = value.restrictQueryResult;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // restrict_direct_table_access - computed: true, optional: false, required: false
  public get restrictDirectTableAccess() {
    return this.getBooleanAttribute('restrict_direct_table_access');
  }

  // restrict_query_result - computed: false, optional: true, required: false
  private _restrictQueryResult?: boolean | cdktf.IResolvable; 
  public get restrictQueryResult() {
    return this.getBooleanAttribute('restrict_query_result');
  }
  public set restrictQueryResult(value: boolean | cdktf.IResolvable) {
    this._restrictQueryResult = value;
  }
  public resetRestrictQueryResult() {
    this._restrictQueryResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictQueryResultInput() {
    return this._restrictQueryResult;
  }
}
export interface GoogleBigqueryAnalyticsHubListingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#create GoogleBigqueryAnalyticsHubListing#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#delete GoogleBigqueryAnalyticsHubListing#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#update GoogleBigqueryAnalyticsHubListing#update}
  */
  readonly update?: string;
}

export function googleBigqueryAnalyticsHubListingTimeoutsToTerraform(struct?: GoogleBigqueryAnalyticsHubListingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleBigqueryAnalyticsHubListingTimeoutsToHclTerraform(struct?: GoogleBigqueryAnalyticsHubListingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBigqueryAnalyticsHubListingTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryAnalyticsHubListingTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing}
*/
export class GoogleBigqueryAnalyticsHubListing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_analytics_hub_listing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubListing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBigqueryAnalyticsHubListing to import
  * @param importFromId The id of the existing GoogleBigqueryAnalyticsHubListing that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBigqueryAnalyticsHubListing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_analytics_hub_listing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigqueryAnalyticsHubListingConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigqueryAnalyticsHubListingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_analytics_hub_listing',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.24.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categories = config.categories;
    this._dataExchangeId = config.dataExchangeId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._documentation = config.documentation;
    this._icon = config.icon;
    this._id = config.id;
    this._listingId = config.listingId;
    this._location = config.location;
    this._primaryContact = config.primaryContact;
    this._project = config.project;
    this._requestAccess = config.requestAccess;
    this._bigqueryDataset.internalValue = config.bigqueryDataset;
    this._dataProvider.internalValue = config.dataProvider;
    this._publisher.internalValue = config.publisher;
    this._restrictedExportConfig.internalValue = config.restrictedExportConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // data_exchange_id - computed: false, optional: false, required: true
  private _dataExchangeId?: string; 
  public get dataExchangeId() {
    return this.getStringAttribute('data_exchange_id');
  }
  public set dataExchangeId(value: string) {
    this._dataExchangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExchangeIdInput() {
    return this._dataExchangeId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // documentation - computed: false, optional: true, required: false
  private _documentation?: string; 
  public get documentation() {
    return this.getStringAttribute('documentation');
  }
  public set documentation(value: string) {
    this._documentation = value;
  }
  public resetDocumentation() {
    this._documentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationInput() {
    return this._documentation;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // listing_id - computed: false, optional: false, required: true
  private _listingId?: string; 
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }
  public set listingId(value: string) {
    this._listingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listingIdInput() {
    return this._listingId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // request_access - computed: false, optional: true, required: false
  private _requestAccess?: string; 
  public get requestAccess() {
    return this.getStringAttribute('request_access');
  }
  public set requestAccess(value: string) {
    this._requestAccess = value;
  }
  public resetRequestAccess() {
    this._requestAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAccessInput() {
    return this._requestAccess;
  }

  // bigquery_dataset - computed: false, optional: false, required: true
  private _bigqueryDataset = new GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference(this, "bigquery_dataset");
  public get bigqueryDataset() {
    return this._bigqueryDataset;
  }
  public putBigqueryDataset(value: GoogleBigqueryAnalyticsHubListingBigqueryDataset) {
    this._bigqueryDataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset.internalValue;
  }

  // data_provider - computed: false, optional: true, required: false
  private _dataProvider = new GoogleBigqueryAnalyticsHubListingDataProviderOutputReference(this, "data_provider");
  public get dataProvider() {
    return this._dataProvider;
  }
  public putDataProvider(value: GoogleBigqueryAnalyticsHubListingDataProvider) {
    this._dataProvider.internalValue = value;
  }
  public resetDataProvider() {
    this._dataProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderInput() {
    return this._dataProvider.internalValue;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher = new GoogleBigqueryAnalyticsHubListingPublisherOutputReference(this, "publisher");
  public get publisher() {
    return this._publisher;
  }
  public putPublisher(value: GoogleBigqueryAnalyticsHubListingPublisher) {
    this._publisher.internalValue = value;
  }
  public resetPublisher() {
    this._publisher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher.internalValue;
  }

  // restricted_export_config - computed: false, optional: true, required: false
  private _restrictedExportConfig = new GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference(this, "restricted_export_config");
  public get restrictedExportConfig() {
    return this._restrictedExportConfig;
  }
  public putRestrictedExportConfig(value: GoogleBigqueryAnalyticsHubListingRestrictedExportConfig) {
    this._restrictedExportConfig.internalValue = value;
  }
  public resetRestrictedExportConfig() {
    this._restrictedExportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedExportConfigInput() {
    return this._restrictedExportConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigqueryAnalyticsHubListingTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categories),
      data_exchange_id: cdktf.stringToTerraform(this._dataExchangeId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      documentation: cdktf.stringToTerraform(this._documentation),
      icon: cdktf.stringToTerraform(this._icon),
      id: cdktf.stringToTerraform(this._id),
      listing_id: cdktf.stringToTerraform(this._listingId),
      location: cdktf.stringToTerraform(this._location),
      primary_contact: cdktf.stringToTerraform(this._primaryContact),
      project: cdktf.stringToTerraform(this._project),
      request_access: cdktf.stringToTerraform(this._requestAccess),
      bigquery_dataset: googleBigqueryAnalyticsHubListingBigqueryDatasetToTerraform(this._bigqueryDataset.internalValue),
      data_provider: googleBigqueryAnalyticsHubListingDataProviderToTerraform(this._dataProvider.internalValue),
      publisher: googleBigqueryAnalyticsHubListingPublisherToTerraform(this._publisher.internalValue),
      restricted_export_config: googleBigqueryAnalyticsHubListingRestrictedExportConfigToTerraform(this._restrictedExportConfig.internalValue),
      timeouts: googleBigqueryAnalyticsHubListingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_exchange_id: {
        value: cdktf.stringToHclTerraform(this._dataExchangeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      documentation: {
        value: cdktf.stringToHclTerraform(this._documentation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listing_id: {
        value: cdktf.stringToHclTerraform(this._listingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_contact: {
        value: cdktf.stringToHclTerraform(this._primaryContact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_access: {
        value: cdktf.stringToHclTerraform(this._requestAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_dataset: {
        value: googleBigqueryAnalyticsHubListingBigqueryDatasetToHclTerraform(this._bigqueryDataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryAnalyticsHubListingBigqueryDatasetList",
      },
      data_provider: {
        value: googleBigqueryAnalyticsHubListingDataProviderToHclTerraform(this._dataProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryAnalyticsHubListingDataProviderList",
      },
      publisher: {
        value: googleBigqueryAnalyticsHubListingPublisherToHclTerraform(this._publisher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryAnalyticsHubListingPublisherList",
      },
      restricted_export_config: {
        value: googleBigqueryAnalyticsHubListingRestrictedExportConfigToHclTerraform(this._restrictedExportConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryAnalyticsHubListingRestrictedExportConfigList",
      },
      timeouts: {
        value: googleBigqueryAnalyticsHubListingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBigqueryAnalyticsHubListingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
