# `googleVertexAiFeatureOnlineStore` Submodule <a name="`googleVertexAiFeatureOnlineStore` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStore <a name="GoogleVertexAiFeatureOnlineStore" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store google_vertex_ai_feature_online_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  bigtable: GoogleVertexAiFeatureOnlineStoreBigtable = None,
  dedicated_serving_endpoint: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint = None,
  embedding_management: GoogleVertexAiFeatureOnlineStoreEmbeddingManagement = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  optimized: GoogleVertexAiFeatureOnlineStoreOptimized = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiFeatureOnlineStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the Feature Online Store. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.bigtable">bigtable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a></code> | bigtable block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.dedicatedServingEndpoint">dedicated_serving_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | dedicated_serving_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.embeddingManagement">embedding_management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a></code> | embedding_management block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#id GoogleVertexAiFeatureOnlineStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your feature online stores. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.optimized">optimized</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a></code> | optimized block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#project GoogleVertexAiFeatureOnlineStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of feature online store. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the Feature Online Store.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#name GoogleVertexAiFeatureOnlineStore#name}

---

##### `bigtable`<sup>Optional</sup> <a name="bigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.bigtable"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a>

bigtable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#bigtable GoogleVertexAiFeatureOnlineStore#bigtable}

---

##### `dedicated_serving_endpoint`<sup>Optional</sup> <a name="dedicated_serving_endpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.dedicatedServingEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

dedicated_serving_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#dedicated_serving_endpoint GoogleVertexAiFeatureOnlineStore#dedicated_serving_endpoint}

---

##### `embedding_management`<sup>Optional</sup> <a name="embedding_management" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.embeddingManagement"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a>

embedding_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#embedding_management GoogleVertexAiFeatureOnlineStore#embedding_management}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#force_destroy GoogleVertexAiFeatureOnlineStore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#id GoogleVertexAiFeatureOnlineStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your feature online stores.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#labels GoogleVertexAiFeatureOnlineStore#labels}

---

##### `optimized`<sup>Optional</sup> <a name="optimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.optimized"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a>

optimized block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#optimized GoogleVertexAiFeatureOnlineStore#optimized}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#project GoogleVertexAiFeatureOnlineStore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.region"></a>

- *Type:* str

The region of feature online store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#region GoogleVertexAiFeatureOnlineStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#timeouts GoogleVertexAiFeatureOnlineStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putBigtable">put_bigtable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putDedicatedServingEndpoint">put_dedicated_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putEmbeddingManagement">put_embedding_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putOptimized">put_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetBigtable">reset_bigtable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetDedicatedServingEndpoint">reset_dedicated_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetEmbeddingManagement">reset_embedding_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetOptimized">reset_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bigtable` <a name="put_bigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putBigtable"></a>

```python
def put_bigtable(
  auto_scaling: GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling
) -> None
```

###### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putBigtable.parameter.autoScaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#auto_scaling GoogleVertexAiFeatureOnlineStore#auto_scaling}

---

##### `put_dedicated_serving_endpoint` <a name="put_dedicated_serving_endpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putDedicatedServingEndpoint"></a>

```python
def put_dedicated_serving_endpoint(
  private_service_connect_config: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig = None
) -> None
```

###### `private_service_connect_config`<sup>Optional</sup> <a name="private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putDedicatedServingEndpoint.parameter.privateServiceConnectConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#private_service_connect_config GoogleVertexAiFeatureOnlineStore#private_service_connect_config}

---

##### `put_embedding_management` <a name="put_embedding_management" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putEmbeddingManagement"></a>

```python
def put_embedding_management(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putEmbeddingManagement.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable embedding management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#enabled GoogleVertexAiFeatureOnlineStore#enabled}

---

##### `put_optimized` <a name="put_optimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putOptimized"></a>

```python
def put_optimized() -> None
```

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#create GoogleVertexAiFeatureOnlineStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#delete GoogleVertexAiFeatureOnlineStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#update GoogleVertexAiFeatureOnlineStore#update}.

---

##### `reset_bigtable` <a name="reset_bigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetBigtable"></a>

```python
def reset_bigtable() -> None
```

##### `reset_dedicated_serving_endpoint` <a name="reset_dedicated_serving_endpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetDedicatedServingEndpoint"></a>

```python
def reset_dedicated_serving_endpoint() -> None
```

##### `reset_embedding_management` <a name="reset_embedding_management" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetEmbeddingManagement"></a>

```python
def reset_embedding_management() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_optimized` <a name="reset_optimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetOptimized"></a>

```python
def reset_optimized() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiFeatureOnlineStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.bigtable">bigtable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference">GoogleVertexAiFeatureOnlineStoreBigtableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dedicatedServingEndpoint">dedicated_serving_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.embeddingManagement">embedding_management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference">GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.optimized">optimized</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference">GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference">GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.bigtableInput">bigtable_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput">dedicated_serving_endpoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.embeddingManagementInput">embedding_management_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.optimizedInput">optimized_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigtable`<sup>Required</sup> <a name="bigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.bigtable"></a>

```python
bigtable: GoogleVertexAiFeatureOnlineStoreBigtableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference">GoogleVertexAiFeatureOnlineStoreBigtableOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dedicated_serving_endpoint`<sup>Required</sup> <a name="dedicated_serving_endpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dedicatedServingEndpoint"></a>

```python
dedicated_serving_endpoint: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `embedding_management`<sup>Required</sup> <a name="embedding_management" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.embeddingManagement"></a>

```python
embedding_management: GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference">GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `optimized`<sup>Required</sup> <a name="optimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.optimized"></a>

```python
optimized: GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference">GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.timeouts"></a>

```python
timeouts: GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference">GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `bigtable_input`<sup>Optional</sup> <a name="bigtable_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.bigtableInput"></a>

```python
bigtable_input: GoogleVertexAiFeatureOnlineStoreBigtable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a>

---

##### `dedicated_serving_endpoint_input`<sup>Optional</sup> <a name="dedicated_serving_endpoint_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput"></a>

```python
dedicated_serving_endpoint_input: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---

##### `embedding_management_input`<sup>Optional</sup> <a name="embedding_management_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.embeddingManagementInput"></a>

```python
embedding_management_input: GoogleVertexAiFeatureOnlineStoreEmbeddingManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `optimized_input`<sup>Optional</sup> <a name="optimized_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.optimizedInput"></a>

```python
optimized_input: GoogleVertexAiFeatureOnlineStoreOptimized
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleVertexAiFeatureOnlineStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>]

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreBigtable <a name="GoogleVertexAiFeatureOnlineStoreBigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable(
  auto_scaling: GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | auto_scaling block. |

---

##### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable.property.autoScaling"></a>

```python
auto_scaling: GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#auto_scaling GoogleVertexAiFeatureOnlineStore#auto_scaling}

---

### GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling <a name="GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float],
  cpu_utilization_target: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of nodes to scale up to. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of nodes to scale down to. Must be greater than or equal to 1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget">cpu_utilization_target</a></code> | <code>typing.Union[int, float]</code> | A percentage of the cluster's CPU capacity. |

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of nodes to scale up to.

Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#max_node_count GoogleVertexAiFeatureOnlineStore#max_node_count}

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#min_node_count GoogleVertexAiFeatureOnlineStore#min_node_count}

---

##### `cpu_utilization_target`<sup>Optional</sup> <a name="cpu_utilization_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget"></a>

```python
cpu_utilization_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A percentage of the cluster's CPU capacity.

Can be from 10% to 80%. When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#cpu_utilization_target GoogleVertexAiFeatureOnlineStore#cpu_utilization_target}

---

### GoogleVertexAiFeatureOnlineStoreConfig <a name="GoogleVertexAiFeatureOnlineStoreConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  bigtable: GoogleVertexAiFeatureOnlineStoreBigtable = None,
  dedicated_serving_endpoint: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint = None,
  embedding_management: GoogleVertexAiFeatureOnlineStoreEmbeddingManagement = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  optimized: GoogleVertexAiFeatureOnlineStoreOptimized = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiFeatureOnlineStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.name">name</a></code> | <code>str</code> | The resource name of the Feature Online Store. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.bigtable">bigtable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a></code> | bigtable block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint">dedicated_serving_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | dedicated_serving_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.embeddingManagement">embedding_management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a></code> | embedding_management block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#id GoogleVertexAiFeatureOnlineStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your feature online stores. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.optimized">optimized</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a></code> | optimized block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#project GoogleVertexAiFeatureOnlineStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.region">region</a></code> | <code>str</code> | The region of feature online store. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Feature Online Store.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#name GoogleVertexAiFeatureOnlineStore#name}

---

##### `bigtable`<sup>Optional</sup> <a name="bigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.bigtable"></a>

```python
bigtable: GoogleVertexAiFeatureOnlineStoreBigtable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a>

bigtable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#bigtable GoogleVertexAiFeatureOnlineStore#bigtable}

---

##### `dedicated_serving_endpoint`<sup>Optional</sup> <a name="dedicated_serving_endpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint"></a>

```python
dedicated_serving_endpoint: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

dedicated_serving_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#dedicated_serving_endpoint GoogleVertexAiFeatureOnlineStore#dedicated_serving_endpoint}

---

##### `embedding_management`<sup>Optional</sup> <a name="embedding_management" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.embeddingManagement"></a>

```python
embedding_management: GoogleVertexAiFeatureOnlineStoreEmbeddingManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a>

embedding_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#embedding_management GoogleVertexAiFeatureOnlineStore#embedding_management}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#force_destroy GoogleVertexAiFeatureOnlineStore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#id GoogleVertexAiFeatureOnlineStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your feature online stores.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#labels GoogleVertexAiFeatureOnlineStore#labels}

---

##### `optimized`<sup>Optional</sup> <a name="optimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.optimized"></a>

```python
optimized: GoogleVertexAiFeatureOnlineStoreOptimized
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a>

optimized block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#optimized GoogleVertexAiFeatureOnlineStore#optimized}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#project GoogleVertexAiFeatureOnlineStore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of feature online store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#region GoogleVertexAiFeatureOnlineStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiFeatureOnlineStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#timeouts GoogleVertexAiFeatureOnlineStore#timeouts}

---

### GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint <a name="GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint(
  private_service_connect_config: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig">private_service_connect_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `private_service_connect_config`<sup>Optional</sup> <a name="private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig"></a>

```python
private_service_connect_config: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#private_service_connect_config GoogleVertexAiFeatureOnlineStore#private_service_connect_config}

---

### GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig <a name="GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig(
  enable_private_service_connect: typing.Union[bool, IResolvable],
  project_allowlist: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">enable_private_service_connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, customers will use private service connection to send request. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist">project_allowlist</a></code> | <code>typing.List[str]</code> | A list of Projects from which the forwarding rule will target the service attachment. |

---

##### `enable_private_service_connect`<sup>Required</sup> <a name="enable_private_service_connect" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```python
enable_private_service_connect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, customers will use private service connection to send request.

Otherwise, the connection will set to public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#enable_private_service_connect GoogleVertexAiFeatureOnlineStore#enable_private_service_connect}

---

##### `project_allowlist`<sup>Optional</sup> <a name="project_allowlist" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```python
project_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#project_allowlist GoogleVertexAiFeatureOnlineStore#project_allowlist}

---

### GoogleVertexAiFeatureOnlineStoreEmbeddingManagement <a name="GoogleVertexAiFeatureOnlineStoreEmbeddingManagement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable embedding management. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable embedding management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#enabled GoogleVertexAiFeatureOnlineStore#enabled}

---

### GoogleVertexAiFeatureOnlineStoreOptimized <a name="GoogleVertexAiFeatureOnlineStoreOptimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized()
```


### GoogleVertexAiFeatureOnlineStoreTimeouts <a name="GoogleVertexAiFeatureOnlineStoreTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#create GoogleVertexAiFeatureOnlineStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#delete GoogleVertexAiFeatureOnlineStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#update GoogleVertexAiFeatureOnlineStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#create GoogleVertexAiFeatureOnlineStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#delete GoogleVertexAiFeatureOnlineStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#update GoogleVertexAiFeatureOnlineStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference <a name="GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget">reset_cpu_utilization_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_utilization_target` <a name="reset_cpu_utilization_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget"></a>

```python
def reset_cpu_utilization_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput">cpu_utilization_target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget">cpu_utilization_target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_utilization_target_input`<sup>Optional</sup> <a name="cpu_utilization_target_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput"></a>

```python
cpu_utilization_target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_utilization_target`<sup>Required</sup> <a name="cpu_utilization_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget"></a>

```python
cpu_utilization_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---


### GoogleVertexAiFeatureOnlineStoreBigtableOutputReference <a name="GoogleVertexAiFeatureOnlineStoreBigtableOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling">put_auto_scaling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_scaling` <a name="put_auto_scaling" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling"></a>

```python
def put_auto_scaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float],
  cpu_utilization_target: typing.Union[int, float] = None
) -> None
```

###### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of nodes to scale up to.

Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#max_node_count GoogleVertexAiFeatureOnlineStore#max_node_count}

---

###### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#min_node_count GoogleVertexAiFeatureOnlineStore#min_node_count}

---

###### `cpu_utilization_target`<sup>Optional</sup> <a name="cpu_utilization_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling.parameter.cpuUtilizationTarget"></a>

- *Type:* typing.Union[int, float]

A percentage of the cluster's CPU capacity.

Can be from 10% to 80%. When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#cpu_utilization_target GoogleVertexAiFeatureOnlineStore#cpu_utilization_target}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput">auto_scaling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling"></a>

```python
auto_scaling: GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a>

---

##### `auto_scaling_input`<sup>Optional</sup> <a name="auto_scaling_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput"></a>

```python
auto_scaling_input: GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeatureOnlineStoreBigtable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a>

---


### GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference <a name="GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig">put_private_service_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig">reset_private_service_connect_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_private_service_connect_config` <a name="put_private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig"></a>

```python
def put_private_service_connect_config(
  enable_private_service_connect: typing.Union[bool, IResolvable],
  project_allowlist: typing.List[str] = None
) -> None
```

###### `enable_private_service_connect`<sup>Required</sup> <a name="enable_private_service_connect" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig.parameter.enablePrivateServiceConnect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, customers will use private service connection to send request.

Otherwise, the connection will set to public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#enable_private_service_connect GoogleVertexAiFeatureOnlineStore#enable_private_service_connect}

---

###### `project_allowlist`<sup>Optional</sup> <a name="project_allowlist" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig.parameter.projectAllowlist"></a>

- *Type:* typing.List[str]

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_feature_online_store#project_allowlist GoogleVertexAiFeatureOnlineStore#project_allowlist}

---

##### `reset_private_service_connect_config` <a name="reset_private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig"></a>

```python
def reset_private_service_connect_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig">private_service_connect_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName">public_endpoint_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput">private_service_connect_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_service_connect_config`<sup>Required</sup> <a name="private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig"></a>

```python
private_service_connect_config: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `public_endpoint_domain_name`<sup>Required</sup> <a name="public_endpoint_domain_name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName"></a>

```python
public_endpoint_domain_name: str
```

- *Type:* str

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

##### `private_service_connect_config_input`<sup>Optional</sup> <a name="private_service_connect_config_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput"></a>

```python
private_service_connect_config_input: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---


### GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">reset_project_allowlist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_allowlist` <a name="reset_project_allowlist" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```python
def reset_project_allowlist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">enable_private_service_connect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">project_allowlist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">enable_private_service_connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">project_allowlist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_private_service_connect_input`<sup>Optional</sup> <a name="enable_private_service_connect_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```python
enable_private_service_connect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_allowlist_input`<sup>Optional</sup> <a name="project_allowlist_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```python
project_allowlist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_private_service_connect`<sup>Required</sup> <a name="enable_private_service_connect" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```python
enable_private_service_connect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_allowlist`<sup>Required</sup> <a name="project_allowlist" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```python
project_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---


### GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference <a name="GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeatureOnlineStoreEmbeddingManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a>

---


### GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference <a name="GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeatureOnlineStoreOptimized
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a>

---


### GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference <a name="GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store

googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVertexAiFeatureOnlineStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>]

---



