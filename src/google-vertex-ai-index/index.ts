// https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#description GoogleVertexAiIndex#description}
  */
  readonly description?: string;
  /**
  * The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#display_name GoogleVertexAiIndex#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#id GoogleVertexAiIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.
  * * BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
  * * STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#index_update_method GoogleVertexAiIndex#index_update_method}
  */
  readonly indexUpdateMethod?: string;
  /**
  * The labels with user-defined metadata to organize your Indexes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#labels GoogleVertexAiIndex#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#project GoogleVertexAiIndex#project}
  */
  readonly project?: string;
  /**
  * The region of the index. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#region GoogleVertexAiIndex#region}
  */
  readonly region?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#metadata GoogleVertexAiIndex#metadata}
  */
  readonly metadata?: GoogleVertexAiIndexMetadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#timeouts GoogleVertexAiIndex#timeouts}
  */
  readonly timeouts?: GoogleVertexAiIndexTimeouts;
}
export interface GoogleVertexAiIndexDeployedIndexes {
}

export function googleVertexAiIndexDeployedIndexesToTerraform(struct?: GoogleVertexAiIndexDeployedIndexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiIndexDeployedIndexesToHclTerraform(struct?: GoogleVertexAiIndexDeployedIndexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiIndexDeployedIndexesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiIndexDeployedIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiIndexDeployedIndexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployed_index_id - computed: true, optional: false, required: false
  public get deployedIndexId() {
    return this.getStringAttribute('deployed_index_id');
  }

  // index_endpoint - computed: true, optional: false, required: false
  public get indexEndpoint() {
    return this.getStringAttribute('index_endpoint');
  }
}

export class GoogleVertexAiIndexDeployedIndexesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVertexAiIndexDeployedIndexesOutputReference {
    return new GoogleVertexAiIndexDeployedIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiIndexIndexStats {
}

export function googleVertexAiIndexIndexStatsToTerraform(struct?: GoogleVertexAiIndexIndexStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiIndexIndexStatsToHclTerraform(struct?: GoogleVertexAiIndexIndexStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiIndexIndexStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiIndexIndexStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiIndexIndexStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // shards_count - computed: true, optional: false, required: false
  public get shardsCount() {
    return this.getNumberAttribute('shards_count');
  }

  // vectors_count - computed: true, optional: false, required: false
  public get vectorsCount() {
    return this.getStringAttribute('vectors_count');
  }
}

export class GoogleVertexAiIndexIndexStatsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVertexAiIndexIndexStatsOutputReference {
    return new GoogleVertexAiIndexIndexStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig {
}

export function googleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigToTerraform(struct?: GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference | GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigToHclTerraform(struct?: GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference | GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig {
  /**
  * Number of embeddings on each leaf node. The default value is 1000 if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#leaf_node_embedding_count GoogleVertexAiIndex#leaf_node_embedding_count}
  */
  readonly leafNodeEmbeddingCount?: number;
  /**
  * The default percentage of leaf nodes that any query may be searched. Must be in
  * range 1-100, inclusive. The default value is 10 (means 10%) if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#leaf_nodes_to_search_percent GoogleVertexAiIndex#leaf_nodes_to_search_percent}
  */
  readonly leafNodesToSearchPercent?: number;
}

export function googleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigToTerraform(struct?: GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference | GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leaf_node_embedding_count: cdktf.numberToTerraform(struct!.leafNodeEmbeddingCount),
    leaf_nodes_to_search_percent: cdktf.numberToTerraform(struct!.leafNodesToSearchPercent),
  }
}


export function googleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigToHclTerraform(struct?: GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference | GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    leaf_node_embedding_count: {
      value: cdktf.numberToHclTerraform(struct!.leafNodeEmbeddingCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    leaf_nodes_to_search_percent: {
      value: cdktf.numberToHclTerraform(struct!.leafNodesToSearchPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leafNodeEmbeddingCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafNodeEmbeddingCount = this._leafNodeEmbeddingCount;
    }
    if (this._leafNodesToSearchPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafNodesToSearchPercent = this._leafNodesToSearchPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leafNodeEmbeddingCount = undefined;
      this._leafNodesToSearchPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leafNodeEmbeddingCount = value.leafNodeEmbeddingCount;
      this._leafNodesToSearchPercent = value.leafNodesToSearchPercent;
    }
  }

  // leaf_node_embedding_count - computed: false, optional: true, required: false
  private _leafNodeEmbeddingCount?: number; 
  public get leafNodeEmbeddingCount() {
    return this.getNumberAttribute('leaf_node_embedding_count');
  }
  public set leafNodeEmbeddingCount(value: number) {
    this._leafNodeEmbeddingCount = value;
  }
  public resetLeafNodeEmbeddingCount() {
    this._leafNodeEmbeddingCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafNodeEmbeddingCountInput() {
    return this._leafNodeEmbeddingCount;
  }

  // leaf_nodes_to_search_percent - computed: false, optional: true, required: false
  private _leafNodesToSearchPercent?: number; 
  public get leafNodesToSearchPercent() {
    return this.getNumberAttribute('leaf_nodes_to_search_percent');
  }
  public set leafNodesToSearchPercent(value: number) {
    this._leafNodesToSearchPercent = value;
  }
  public resetLeafNodesToSearchPercent() {
    this._leafNodesToSearchPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafNodesToSearchPercentInput() {
    return this._leafNodesToSearchPercent;
  }
}
export interface GoogleVertexAiIndexMetadataConfigAlgorithmConfig {
  /**
  * brute_force_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#brute_force_config GoogleVertexAiIndex#brute_force_config}
  */
  readonly bruteForceConfig?: GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig;
  /**
  * tree_ah_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#tree_ah_config GoogleVertexAiIndex#tree_ah_config}
  */
  readonly treeAhConfig?: GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig;
}

export function googleVertexAiIndexMetadataConfigAlgorithmConfigToTerraform(struct?: GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference | GoogleVertexAiIndexMetadataConfigAlgorithmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brute_force_config: googleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigToTerraform(struct!.bruteForceConfig),
    tree_ah_config: googleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigToTerraform(struct!.treeAhConfig),
  }
}


export function googleVertexAiIndexMetadataConfigAlgorithmConfigToHclTerraform(struct?: GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference | GoogleVertexAiIndexMetadataConfigAlgorithmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brute_force_config: {
      value: googleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigToHclTerraform(struct!.bruteForceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList",
    },
    tree_ah_config: {
      value: googleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigToHclTerraform(struct!.treeAhConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiIndexMetadataConfigAlgorithmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleVertexAiIndexMetadataConfigAlgorithmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bruteForceConfig.internalValue = undefined;
      this._treeAhConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bruteForceConfig.internalValue = value.bruteForceConfig;
      this._treeAhConfig.internalValue = value.treeAhConfig;
    }
  }

  // brute_force_config - computed: false, optional: true, required: false
  private _bruteForceConfig = new GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(this, "brute_force_config");
  public get bruteForceConfig() {
    return this._bruteForceConfig;
  }
  public putBruteForceConfig(value: GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig) {
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
  private _treeAhConfig = new GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(this, "tree_ah_config");
  public get treeAhConfig() {
    return this._treeAhConfig;
  }
  public putTreeAhConfig(value: GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig) {
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
export interface GoogleVertexAiIndexMetadataConfig {
  /**
  * The default number of neighbors to find via approximate search before exact reordering is
  * performed. Exact reordering is a procedure where results returned by an
  * approximate search algorithm are reordered via a more expensive distance computation.
  * Required if tree-AH algorithm is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#approximate_neighbors_count GoogleVertexAiIndex#approximate_neighbors_count}
  */
  readonly approximateNeighborsCount?: number;
  /**
  * The number of dimensions of the input vectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#dimensions GoogleVertexAiIndex#dimensions}
  */
  readonly dimensions: number;
  /**
  * The distance measure used in nearest neighbor search. The value must be one of the followings:
  * * SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
  * * L1_DISTANCE: Manhattan (L_1) Distance
  * * COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
  * * DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#distance_measure_type GoogleVertexAiIndex#distance_measure_type}
  */
  readonly distanceMeasureType?: string;
  /**
  * Type of normalization to be carried out on each vector. The value must be one of the followings:
  * * UNIT_L2_NORM: Unit L2 normalization type
  * * NONE: No normalization type is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#feature_norm_type GoogleVertexAiIndex#feature_norm_type}
  */
  readonly featureNormType?: string;
  /**
  * Index data is split into equal parts to be processed. These are called "shards".
  * The shard size must be specified when creating an index. The value must be one of the followings:
  * * SHARD_SIZE_SMALL: Small (2GB)
  * * SHARD_SIZE_MEDIUM: Medium (20GB)
  * * SHARD_SIZE_LARGE: Large (50GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#shard_size GoogleVertexAiIndex#shard_size}
  */
  readonly shardSize?: string;
  /**
  * algorithm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#algorithm_config GoogleVertexAiIndex#algorithm_config}
  */
  readonly algorithmConfig?: GoogleVertexAiIndexMetadataConfigAlgorithmConfig;
}

export function googleVertexAiIndexMetadataConfigToTerraform(struct?: GoogleVertexAiIndexMetadataConfigOutputReference | GoogleVertexAiIndexMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approximate_neighbors_count: cdktf.numberToTerraform(struct!.approximateNeighborsCount),
    dimensions: cdktf.numberToTerraform(struct!.dimensions),
    distance_measure_type: cdktf.stringToTerraform(struct!.distanceMeasureType),
    feature_norm_type: cdktf.stringToTerraform(struct!.featureNormType),
    shard_size: cdktf.stringToTerraform(struct!.shardSize),
    algorithm_config: googleVertexAiIndexMetadataConfigAlgorithmConfigToTerraform(struct!.algorithmConfig),
  }
}


export function googleVertexAiIndexMetadataConfigToHclTerraform(struct?: GoogleVertexAiIndexMetadataConfigOutputReference | GoogleVertexAiIndexMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approximate_neighbors_count: {
      value: cdktf.numberToHclTerraform(struct!.approximateNeighborsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dimensions: {
      value: cdktf.numberToHclTerraform(struct!.dimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_measure_type: {
      value: cdktf.stringToHclTerraform(struct!.distanceMeasureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_norm_type: {
      value: cdktf.stringToHclTerraform(struct!.featureNormType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shard_size: {
      value: cdktf.stringToHclTerraform(struct!.shardSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    algorithm_config: {
      value: googleVertexAiIndexMetadataConfigAlgorithmConfigToHclTerraform(struct!.algorithmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiIndexMetadataConfigAlgorithmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiIndexMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiIndexMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approximateNeighborsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.approximateNeighborsCount = this._approximateNeighborsCount;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._distanceMeasureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMeasureType = this._distanceMeasureType;
    }
    if (this._featureNormType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureNormType = this._featureNormType;
    }
    if (this._shardSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardSize = this._shardSize;
    }
    if (this._algorithmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmConfig = this._algorithmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiIndexMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approximateNeighborsCount = undefined;
      this._dimensions = undefined;
      this._distanceMeasureType = undefined;
      this._featureNormType = undefined;
      this._shardSize = undefined;
      this._algorithmConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approximateNeighborsCount = value.approximateNeighborsCount;
      this._dimensions = value.dimensions;
      this._distanceMeasureType = value.distanceMeasureType;
      this._featureNormType = value.featureNormType;
      this._shardSize = value.shardSize;
      this._algorithmConfig.internalValue = value.algorithmConfig;
    }
  }

  // approximate_neighbors_count - computed: false, optional: true, required: false
  private _approximateNeighborsCount?: number; 
  public get approximateNeighborsCount() {
    return this.getNumberAttribute('approximate_neighbors_count');
  }
  public set approximateNeighborsCount(value: number) {
    this._approximateNeighborsCount = value;
  }
  public resetApproximateNeighborsCount() {
    this._approximateNeighborsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approximateNeighborsCountInput() {
    return this._approximateNeighborsCount;
  }

  // dimensions - computed: false, optional: false, required: true
  private _dimensions?: number; 
  public get dimensions() {
    return this.getNumberAttribute('dimensions');
  }
  public set dimensions(value: number) {
    this._dimensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

  // feature_norm_type - computed: false, optional: true, required: false
  private _featureNormType?: string; 
  public get featureNormType() {
    return this.getStringAttribute('feature_norm_type');
  }
  public set featureNormType(value: string) {
    this._featureNormType = value;
  }
  public resetFeatureNormType() {
    this._featureNormType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNormTypeInput() {
    return this._featureNormType;
  }

  // shard_size - computed: true, optional: true, required: false
  private _shardSize?: string; 
  public get shardSize() {
    return this.getStringAttribute('shard_size');
  }
  public set shardSize(value: string) {
    this._shardSize = value;
  }
  public resetShardSize() {
    this._shardSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardSizeInput() {
    return this._shardSize;
  }

  // algorithm_config - computed: false, optional: true, required: false
  private _algorithmConfig = new GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference(this, "algorithm_config");
  public get algorithmConfig() {
    return this._algorithmConfig;
  }
  public putAlgorithmConfig(value: GoogleVertexAiIndexMetadataConfigAlgorithmConfig) {
    this._algorithmConfig.internalValue = value;
  }
  public resetAlgorithmConfig() {
    this._algorithmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmConfigInput() {
    return this._algorithmConfig.internalValue;
  }
}
export interface GoogleVertexAiIndexMetadata {
  /**
  * Allows inserting, updating  or deleting the contents of the Matching Engine Index.
  * The string must be a valid Cloud Storage directory path. If this
  * field is set when calling IndexService.UpdateIndex, then no other
  * Index field can be also updated as part of the same call.
  * The expected structure and format of the files this URI points to is
  * described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#contents_delta_uri GoogleVertexAiIndex#contents_delta_uri}
  */
  readonly contentsDeltaUri?: string;
  /**
  * If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,
  * then existing content of the Index will be replaced by the data from the contentsDeltaUri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#is_complete_overwrite GoogleVertexAiIndex#is_complete_overwrite}
  */
  readonly isCompleteOverwrite?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#config GoogleVertexAiIndex#config}
  */
  readonly config?: GoogleVertexAiIndexMetadataConfig;
}

export function googleVertexAiIndexMetadataToTerraform(struct?: GoogleVertexAiIndexMetadataOutputReference | GoogleVertexAiIndexMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents_delta_uri: cdktf.stringToTerraform(struct!.contentsDeltaUri),
    is_complete_overwrite: cdktf.booleanToTerraform(struct!.isCompleteOverwrite),
    config: googleVertexAiIndexMetadataConfigToTerraform(struct!.config),
  }
}


export function googleVertexAiIndexMetadataToHclTerraform(struct?: GoogleVertexAiIndexMetadataOutputReference | GoogleVertexAiIndexMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents_delta_uri: {
      value: cdktf.stringToHclTerraform(struct!.contentsDeltaUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_complete_overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.isCompleteOverwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config: {
      value: googleVertexAiIndexMetadataConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiIndexMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiIndexMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiIndexMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentsDeltaUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentsDeltaUri = this._contentsDeltaUri;
    }
    if (this._isCompleteOverwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCompleteOverwrite = this._isCompleteOverwrite;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiIndexMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentsDeltaUri = undefined;
      this._isCompleteOverwrite = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentsDeltaUri = value.contentsDeltaUri;
      this._isCompleteOverwrite = value.isCompleteOverwrite;
      this._config.internalValue = value.config;
    }
  }

  // contents_delta_uri - computed: false, optional: true, required: false
  private _contentsDeltaUri?: string; 
  public get contentsDeltaUri() {
    return this.getStringAttribute('contents_delta_uri');
  }
  public set contentsDeltaUri(value: string) {
    this._contentsDeltaUri = value;
  }
  public resetContentsDeltaUri() {
    this._contentsDeltaUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsDeltaUriInput() {
    return this._contentsDeltaUri;
  }

  // is_complete_overwrite - computed: false, optional: true, required: false
  private _isCompleteOverwrite?: boolean | cdktf.IResolvable; 
  public get isCompleteOverwrite() {
    return this.getBooleanAttribute('is_complete_overwrite');
  }
  public set isCompleteOverwrite(value: boolean | cdktf.IResolvable) {
    this._isCompleteOverwrite = value;
  }
  public resetIsCompleteOverwrite() {
    this._isCompleteOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompleteOverwriteInput() {
    return this._isCompleteOverwrite;
  }

  // config - computed: false, optional: true, required: false
  private _config = new GoogleVertexAiIndexMetadataConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleVertexAiIndexMetadataConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface GoogleVertexAiIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#create GoogleVertexAiIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#delete GoogleVertexAiIndex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#update GoogleVertexAiIndex#update}
  */
  readonly update?: string;
}

export function googleVertexAiIndexTimeoutsToTerraform(struct?: GoogleVertexAiIndexTimeouts | cdktf.IResolvable): any {
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


export function googleVertexAiIndexTimeoutsToHclTerraform(struct?: GoogleVertexAiIndexTimeouts | cdktf.IResolvable): any {
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

export class GoogleVertexAiIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiIndexTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiIndexTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index google_vertex_ai_index}
*/
export class GoogleVertexAiIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVertexAiIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiIndex to import
  * @param importFromId The id of the existing GoogleVertexAiIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_vertex_ai_index google_vertex_ai_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiIndexConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_index',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.25.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._indexUpdateMethod = config.indexUpdateMethod;
    this._labels = config.labels;
    this._project = config.project;
    this._region = config.region;
    this._metadata.internalValue = config.metadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deployed_indexes - computed: true, optional: false, required: false
  private _deployedIndexes = new GoogleVertexAiIndexDeployedIndexesList(this, "deployed_indexes", false);
  public get deployedIndexes() {
    return this._deployedIndexes;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // index_stats - computed: true, optional: false, required: false
  private _indexStats = new GoogleVertexAiIndexIndexStatsList(this, "index_stats", false);
  public get indexStats() {
    return this._indexStats;
  }

  // index_update_method - computed: false, optional: true, required: false
  private _indexUpdateMethod?: string; 
  public get indexUpdateMethod() {
    return this.getStringAttribute('index_update_method');
  }
  public set indexUpdateMethod(value: string) {
    this._indexUpdateMethod = value;
  }
  public resetIndexUpdateMethod() {
    this._indexUpdateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexUpdateMethodInput() {
    return this._indexUpdateMethod;
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

  // metadata_schema_uri - computed: true, optional: false, required: false
  public get metadataSchemaUri() {
    return this.getStringAttribute('metadata_schema_uri');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new GoogleVertexAiIndexMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: GoogleVertexAiIndexMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiIndexTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      index_update_method: cdktf.stringToTerraform(this._indexUpdateMethod),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      metadata: googleVertexAiIndexMetadataToTerraform(this._metadata.internalValue),
      timeouts: googleVertexAiIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_update_method: {
        value: cdktf.stringToHclTerraform(this._indexUpdateMethod),
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
      metadata: {
        value: googleVertexAiIndexMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiIndexMetadataList",
      },
      timeouts: {
        value: googleVertexAiIndexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiIndexTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
