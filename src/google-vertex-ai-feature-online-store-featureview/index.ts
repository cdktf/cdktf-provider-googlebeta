// https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiFeatureOnlineStoreFeatureviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the FeatureOnlineStore to use for the featureview.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureview#feature_online_store}
  */
  readonly featureOnlineStore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#id GoogleVertexAiFeatureOnlineStoreFeatureview#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to this FeatureView.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#labels GoogleVertexAiFeatureOnlineStoreFeatureview#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#name GoogleVertexAiFeatureOnlineStoreFeatureview#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#project GoogleVertexAiFeatureOnlineStoreFeatureview#project}
  */
  readonly project?: string;
  /**
  * The region for the resource. It should be the same as the featureonlinestore region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#region GoogleVertexAiFeatureOnlineStoreFeatureview#region}
  */
  readonly region: string;
  /**
  * big_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#big_query_source GoogleVertexAiFeatureOnlineStoreFeatureview#big_query_source}
  */
  readonly bigQuerySource?: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource;
  /**
  * feature_registry_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_registry_source GoogleVertexAiFeatureOnlineStoreFeatureview#feature_registry_source}
  */
  readonly featureRegistrySource?: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource;
  /**
  * sync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#sync_config GoogleVertexAiFeatureOnlineStoreFeatureview#sync_config}
  */
  readonly syncConfig?: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#timeouts GoogleVertexAiFeatureOnlineStoreFeatureview#timeouts}
  */
  readonly timeouts?: GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts;
  /**
  * vector_search_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#vector_search_config GoogleVertexAiFeatureOnlineStoreFeatureview#vector_search_config}
  */
  readonly vectorSearchConfig?: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig;
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource {
  /**
  * Columns to construct entityId / row keys. Start by supporting 1 only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#entity_id_columns GoogleVertexAiFeatureOnlineStoreFeatureview#entity_id_columns}
  */
  readonly entityIdColumns: string[];
  /**
  * The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#uri GoogleVertexAiFeatureOnlineStoreFeatureview#uri}
  */
  readonly uri: string;
}

export function googleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceToTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityIdColumns),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceToHclTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityIdColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdColumns = this._entityIdColumns;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityIdColumns = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityIdColumns = value.entityIdColumns;
      this._uri = value.uri;
    }
  }

  // entity_id_columns - computed: false, optional: false, required: true
  private _entityIdColumns?: string[]; 
  public get entityIdColumns() {
    return this.getListAttribute('entity_id_columns');
  }
  public set entityIdColumns(value: string[]) {
    this._entityIdColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdColumnsInput() {
    return this._entityIdColumns;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups {
  /**
  * Identifier of the feature group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_group_id GoogleVertexAiFeatureOnlineStoreFeatureview#feature_group_id}
  */
  readonly featureGroupId: string;
  /**
  * Identifiers of features under the feature group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_ids GoogleVertexAiFeatureOnlineStoreFeatureview#feature_ids}
  */
  readonly featureIds: string[];
}

export function googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsToTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_group_id: cdktf.stringToTerraform(struct!.featureGroupId),
    feature_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.featureIds),
  }
}


export function googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsToHclTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_group_id: {
      value: cdktf.stringToHclTerraform(struct!.featureGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.featureIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGroupId = this._featureGroupId;
    }
    if (this._featureIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureIds = this._featureIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureGroupId = undefined;
      this._featureIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureGroupId = value.featureGroupId;
      this._featureIds = value.featureIds;
    }
  }

  // feature_group_id - computed: false, optional: false, required: true
  private _featureGroupId?: string; 
  public get featureGroupId() {
    return this.getStringAttribute('feature_group_id');
  }
  public set featureGroupId(value: string) {
    this._featureGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGroupIdInput() {
    return this._featureGroupId;
  }

  // feature_ids - computed: false, optional: false, required: true
  private _featureIds?: string[]; 
  public get featureIds() {
    return this.getListAttribute('feature_ids');
  }
  public set featureIds(value: string[]) {
    this._featureIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureIdsInput() {
    return this._featureIds;
  }
}

export class GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[] | cdktf.IResolvable

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
  public get(index: number): GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference {
    return new GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource {
  /**
  * The project number of the parent project of the feature Groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#project_number GoogleVertexAiFeatureOnlineStoreFeatureview#project_number}
  */
  readonly projectNumber?: string;
  /**
  * feature_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_groups GoogleVertexAiFeatureOnlineStoreFeatureview#feature_groups}
  */
  readonly featureGroups: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[] | cdktf.IResolvable;
}

export function googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceToTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_number: cdktf.stringToTerraform(struct!.projectNumber),
    feature_groups: cdktf.listMapper(googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsToTerraform, true)(struct!.featureGroups),
  }
}


export function googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceToHclTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_number: {
      value: cdktf.stringToHclTerraform(struct!.projectNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_groups: {
      value: cdktf.listMapperHcl(googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsToHclTerraform, true)(struct!.featureGroups),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectNumber = this._projectNumber;
    }
    if (this._featureGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGroups = this._featureGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectNumber = undefined;
      this._featureGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectNumber = value.projectNumber;
      this._featureGroups.internalValue = value.featureGroups;
    }
  }

  // project_number - computed: false, optional: true, required: false
  private _projectNumber?: string; 
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }
  public set projectNumber(value: string) {
    this._projectNumber = value;
  }
  public resetProjectNumber() {
    this._projectNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNumberInput() {
    return this._projectNumber;
  }

  // feature_groups - computed: false, optional: false, required: true
  private _featureGroups = new GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList(this, "feature_groups", false);
  public get featureGroups() {
    return this._featureGroups;
  }
  public putFeatureGroups(value: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[] | cdktf.IResolvable) {
    this._featureGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGroupsInput() {
    return this._featureGroups.internalValue;
  }
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig {
  /**
  * Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.
  * To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#cron GoogleVertexAiFeatureOnlineStoreFeatureview#cron}
  */
  readonly cron?: string;
}

export function googleVertexAiFeatureOnlineStoreFeatureviewSyncConfigToTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
  }
}


export function googleVertexAiFeatureOnlineStoreFeatureviewSyncConfigToHclTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cron = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cron = value.cron;
    }
  }

  // cron - computed: true, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#create GoogleVertexAiFeatureOnlineStoreFeatureview#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#delete GoogleVertexAiFeatureOnlineStoreFeatureview#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#update GoogleVertexAiFeatureOnlineStoreFeatureview#update}
  */
  readonly update?: string;
}

export function googleVertexAiFeatureOnlineStoreFeatureviewTimeoutsToTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts | cdktf.IResolvable): any {
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


export function googleVertexAiFeatureOnlineStoreFeatureviewTimeoutsToHclTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts | cdktf.IResolvable): any {
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

export class GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig {
}

export function googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigToTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigToHclTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig {
  /**
  * Number of embeddings on each leaf node. The default value is 1000 if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#leaf_node_embedding_count GoogleVertexAiFeatureOnlineStoreFeatureview#leaf_node_embedding_count}
  */
  readonly leafNodeEmbeddingCount?: string;
}

export function googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigToTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leaf_node_embedding_count: cdktf.stringToTerraform(struct!.leafNodeEmbeddingCount),
  }
}


export function googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigToHclTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    leaf_node_embedding_count: {
      value: cdktf.stringToHclTerraform(struct!.leafNodeEmbeddingCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leafNodeEmbeddingCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafNodeEmbeddingCount = this._leafNodeEmbeddingCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leafNodeEmbeddingCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leafNodeEmbeddingCount = value.leafNodeEmbeddingCount;
    }
  }

  // leaf_node_embedding_count - computed: true, optional: true, required: false
  private _leafNodeEmbeddingCount?: string; 
  public get leafNodeEmbeddingCount() {
    return this.getStringAttribute('leaf_node_embedding_count');
  }
  public set leafNodeEmbeddingCount(value: string) {
    this._leafNodeEmbeddingCount = value;
  }
  public resetLeafNodeEmbeddingCount() {
    this._leafNodeEmbeddingCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafNodeEmbeddingCountInput() {
    return this._leafNodeEmbeddingCount;
  }
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig {
  /**
  * Column of crowding. This column contains crowding attribute which is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than some value k' of the k neighbors returned have the same value of crowdingAttribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#crowding_column GoogleVertexAiFeatureOnlineStoreFeatureview#crowding_column}
  */
  readonly crowdingColumn?: string;
  /**
  * The distance measure used in nearest neighbor search.
  * For details on allowed values, see the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.featureOnlineStores.featureViews#DistanceMeasureType). Possible values: ["SQUARED_L2_DISTANCE", "COSINE_DISTANCE", "DOT_PRODUCT_DISTANCE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#distance_measure_type GoogleVertexAiFeatureOnlineStoreFeatureview#distance_measure_type}
  */
  readonly distanceMeasureType?: string;
  /**
  * Column of embedding. This column contains the source data to create index for vector search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#embedding_column GoogleVertexAiFeatureOnlineStoreFeatureview#embedding_column}
  */
  readonly embeddingColumn: string;
  /**
  * The number of dimensions of the input embedding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#embedding_dimension GoogleVertexAiFeatureOnlineStoreFeatureview#embedding_dimension}
  */
  readonly embeddingDimension?: number;
  /**
  * Columns of features that are used to filter vector search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#filter_columns GoogleVertexAiFeatureOnlineStoreFeatureview#filter_columns}
  */
  readonly filterColumns?: string[];
  /**
  * brute_force_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#brute_force_config GoogleVertexAiFeatureOnlineStoreFeatureview#brute_force_config}
  */
  readonly bruteForceConfig?: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig;
  /**
  * tree_ah_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#tree_ah_config GoogleVertexAiFeatureOnlineStoreFeatureview#tree_ah_config}
  */
  readonly treeAhConfig?: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig;
}

export function googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigToTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crowding_column: cdktf.stringToTerraform(struct!.crowdingColumn),
    distance_measure_type: cdktf.stringToTerraform(struct!.distanceMeasureType),
    embedding_column: cdktf.stringToTerraform(struct!.embeddingColumn),
    embedding_dimension: cdktf.numberToTerraform(struct!.embeddingDimension),
    filter_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterColumns),
    brute_force_config: googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigToTerraform(struct!.bruteForceConfig),
    tree_ah_config: googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigToTerraform(struct!.treeAhConfig),
  }
}


export function googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigToHclTerraform(struct?: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference | GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crowding_column: {
      value: cdktf.stringToHclTerraform(struct!.crowdingColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_measure_type: {
      value: cdktf.stringToHclTerraform(struct!.distanceMeasureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_column: {
      value: cdktf.stringToHclTerraform(struct!.embeddingColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_dimension: {
      value: cdktf.numberToHclTerraform(struct!.embeddingDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    brute_force_config: {
      value: googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigToHclTerraform(struct!.bruteForceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigList",
    },
    tree_ah_config: {
      value: googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigToHclTerraform(struct!.treeAhConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crowdingColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdingColumn = this._crowdingColumn;
    }
    if (this._distanceMeasureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMeasureType = this._distanceMeasureType;
    }
    if (this._embeddingColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingColumn = this._embeddingColumn;
    }
    if (this._embeddingDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDimension = this._embeddingDimension;
    }
    if (this._filterColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterColumns = this._filterColumns;
    }
    if (this._bruteForceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bruteForceConfig = this._bruteForceConfig?.internalValue;
    }
    if (this._treeAhConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.treeAhConfig = this._treeAhConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crowdingColumn = undefined;
      this._distanceMeasureType = undefined;
      this._embeddingColumn = undefined;
      this._embeddingDimension = undefined;
      this._filterColumns = undefined;
      this._bruteForceConfig.internalValue = undefined;
      this._treeAhConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crowdingColumn = value.crowdingColumn;
      this._distanceMeasureType = value.distanceMeasureType;
      this._embeddingColumn = value.embeddingColumn;
      this._embeddingDimension = value.embeddingDimension;
      this._filterColumns = value.filterColumns;
      this._bruteForceConfig.internalValue = value.bruteForceConfig;
      this._treeAhConfig.internalValue = value.treeAhConfig;
    }
  }

  // crowding_column - computed: false, optional: true, required: false
  private _crowdingColumn?: string; 
  public get crowdingColumn() {
    return this.getStringAttribute('crowding_column');
  }
  public set crowdingColumn(value: string) {
    this._crowdingColumn = value;
  }
  public resetCrowdingColumn() {
    this._crowdingColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdingColumnInput() {
    return this._crowdingColumn;
  }

  // distance_measure_type - computed: false, optional: true, required: false
  private _distanceMeasureType?: string; 
  public get distanceMeasureType() {
    return this.getStringAttribute('distance_measure_type');
  }
  public set distanceMeasureType(value: string) {
    this._distanceMeasureType = value;
  }
  public resetDistanceMeasureType() {
    this._distanceMeasureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMeasureTypeInput() {
    return this._distanceMeasureType;
  }

  // embedding_column - computed: false, optional: false, required: true
  private _embeddingColumn?: string; 
  public get embeddingColumn() {
    return this.getStringAttribute('embedding_column');
  }
  public set embeddingColumn(value: string) {
    this._embeddingColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingColumnInput() {
    return this._embeddingColumn;
  }

  // embedding_dimension - computed: false, optional: true, required: false
  private _embeddingDimension?: number; 
  public get embeddingDimension() {
    return this.getNumberAttribute('embedding_dimension');
  }
  public set embeddingDimension(value: number) {
    this._embeddingDimension = value;
  }
  public resetEmbeddingDimension() {
    this._embeddingDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDimensionInput() {
    return this._embeddingDimension;
  }

  // filter_columns - computed: false, optional: true, required: false
  private _filterColumns?: string[]; 
  public get filterColumns() {
    return this.getListAttribute('filter_columns');
  }
  public set filterColumns(value: string[]) {
    this._filterColumns = value;
  }
  public resetFilterColumns() {
    this._filterColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterColumnsInput() {
    return this._filterColumns;
  }

  // brute_force_config - computed: false, optional: true, required: false
  private _bruteForceConfig = new GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference(this, "brute_force_config");
  public get bruteForceConfig() {
    return this._bruteForceConfig;
  }
  public putBruteForceConfig(value: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig) {
    this._bruteForceConfig.internalValue = value;
  }
  public resetBruteForceConfig() {
    this._bruteForceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteForceConfigInput() {
    return this._bruteForceConfig.internalValue;
  }

  // tree_ah_config - computed: false, optional: true, required: false
  private _treeAhConfig = new GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference(this, "tree_ah_config");
  public get treeAhConfig() {
    return this._treeAhConfig;
  }
  public putTreeAhConfig(value: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig) {
    this._treeAhConfig.internalValue = value;
  }
  public resetTreeAhConfig() {
    this._treeAhConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treeAhConfigInput() {
    return this._treeAhConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview google_vertex_ai_feature_online_store_featureview}
*/
export class GoogleVertexAiFeatureOnlineStoreFeatureview extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_feature_online_store_featureview";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStoreFeatureview to import
  * @param importFromId The id of the existing GoogleVertexAiFeatureOnlineStoreFeatureview that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStoreFeatureview to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_feature_online_store_featureview", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_feature_online_store_featureview google_vertex_ai_feature_online_store_featureview} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiFeatureOnlineStoreFeatureviewConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiFeatureOnlineStoreFeatureviewConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_feature_online_store_featureview',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.15.0',
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
    this._featureOnlineStore = config.featureOnlineStore;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._bigQuerySource.internalValue = config.bigQuerySource;
    this._featureRegistrySource.internalValue = config.featureRegistrySource;
    this._syncConfig.internalValue = config.syncConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vectorSearchConfig.internalValue = config.vectorSearchConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // feature_online_store - computed: false, optional: false, required: true
  private _featureOnlineStore?: string; 
  public get featureOnlineStore() {
    return this.getStringAttribute('feature_online_store');
  }
  public set featureOnlineStore(value: string) {
    this._featureOnlineStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureOnlineStoreInput() {
    return this._featureOnlineStore;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // big_query_source - computed: false, optional: true, required: false
  private _bigQuerySource = new GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference(this, "big_query_source");
  public get bigQuerySource() {
    return this._bigQuerySource;
  }
  public putBigQuerySource(value: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource) {
    this._bigQuerySource.internalValue = value;
  }
  public resetBigQuerySource() {
    this._bigQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQuerySourceInput() {
    return this._bigQuerySource.internalValue;
  }

  // feature_registry_source - computed: false, optional: true, required: false
  private _featureRegistrySource = new GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference(this, "feature_registry_source");
  public get featureRegistrySource() {
    return this._featureRegistrySource;
  }
  public putFeatureRegistrySource(value: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource) {
    this._featureRegistrySource.internalValue = value;
  }
  public resetFeatureRegistrySource() {
    this._featureRegistrySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureRegistrySourceInput() {
    return this._featureRegistrySource.internalValue;
  }

  // sync_config - computed: false, optional: true, required: false
  private _syncConfig = new GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig) {
    this._syncConfig.internalValue = value;
  }
  public resetSyncConfig() {
    this._syncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConfigInput() {
    return this._syncConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vector_search_config - computed: false, optional: true, required: false
  private _vectorSearchConfig = new GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference(this, "vector_search_config");
  public get vectorSearchConfig() {
    return this._vectorSearchConfig;
  }
  public putVectorSearchConfig(value: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig) {
    this._vectorSearchConfig.internalValue = value;
  }
  public resetVectorSearchConfig() {
    this._vectorSearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSearchConfigInput() {
    return this._vectorSearchConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_online_store: cdktf.stringToTerraform(this._featureOnlineStore),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      big_query_source: googleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceToTerraform(this._bigQuerySource.internalValue),
      feature_registry_source: googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceToTerraform(this._featureRegistrySource.internalValue),
      sync_config: googleVertexAiFeatureOnlineStoreFeatureviewSyncConfigToTerraform(this._syncConfig.internalValue),
      timeouts: googleVertexAiFeatureOnlineStoreFeatureviewTimeoutsToTerraform(this._timeouts.internalValue),
      vector_search_config: googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigToTerraform(this._vectorSearchConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_online_store: {
        value: cdktf.stringToHclTerraform(this._featureOnlineStore),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      big_query_source: {
        value: googleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceToHclTerraform(this._bigQuerySource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceList",
      },
      feature_registry_source: {
        value: googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceToHclTerraform(this._featureRegistrySource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceList",
      },
      sync_config: {
        value: googleVertexAiFeatureOnlineStoreFeatureviewSyncConfigToHclTerraform(this._syncConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigList",
      },
      timeouts: {
        value: googleVertexAiFeatureOnlineStoreFeatureviewTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts",
      },
      vector_search_config: {
        value: googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigToHclTerraform(this._vectorSearchConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
