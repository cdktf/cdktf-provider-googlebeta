# `google_cloud_asset_folder_feed`

Refer to the Terraform Registory for docs: [`google_cloud_asset_folder_feed`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed).

# `googleCloudAssetFolderFeed` Submodule <a name="`googleCloudAssetFolderFeed` Submodule" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudAssetFolderFeed <a name="GoogleCloudAssetFolderFeed" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed google_cloud_asset_folder_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_project: str,
  feed_id: str,
  feed_output_config: GoogleCloudAssetFolderFeedFeedOutputConfig,
  folder: str,
  asset_names: typing.List[str] = None,
  asset_types: typing.List[str] = None,
  condition: GoogleCloudAssetFolderFeedCondition = None,
  content_type: str = None,
  id: str = None,
  timeouts: GoogleCloudAssetFolderFeedTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.billingProject">billing_project</a></code> | <code>str</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.feedId">feed_id</a></code> | <code>str</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The folder this feed should be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#id GoogleCloudAssetFolderFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.billingProject"></a>

- *Type:* str

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#billing_project GoogleCloudAssetFolderFeed#billing_project}

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.feedId"></a>

- *Type:* str

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#feed_id GoogleCloudAssetFolderFeed#feed_id}

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.feedOutputConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#feed_output_config GoogleCloudAssetFolderFeed#feed_output_config}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.folder"></a>

- *Type:* str

The folder this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#folder GoogleCloudAssetFolderFeed#folder}

---

##### `asset_names`<sup>Optional</sup> <a name="asset_names" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.assetNames"></a>

- *Type:* typing.List[str]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#asset_names GoogleCloudAssetFolderFeed#asset_names}

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.assetTypes"></a>

- *Type:* typing.List[str]

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#asset_types GoogleCloudAssetFolderFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#condition GoogleCloudAssetFolderFeed#condition}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.contentType"></a>

- *Type:* str

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#content_type GoogleCloudAssetFolderFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#id GoogleCloudAssetFolderFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#timeouts GoogleCloudAssetFolderFeed#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putFeedOutputConfig">put_feed_output_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetAssetNames">reset_asset_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetAssetTypes">reset_asset_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putCondition"></a>

```python
def put_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#expression GoogleCloudAssetFolderFeed#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putCondition.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#description GoogleCloudAssetFolderFeed#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putCondition.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#location GoogleCloudAssetFolderFeed#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putCondition.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#title GoogleCloudAssetFolderFeed#title}

---

##### `put_feed_output_config` <a name="put_feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putFeedOutputConfig"></a>

```python
def put_feed_output_config(
  pubsub_destination: GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination
) -> None
```

###### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putFeedOutputConfig.parameter.pubsubDestination"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#pubsub_destination GoogleCloudAssetFolderFeed#pubsub_destination}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#create GoogleCloudAssetFolderFeed#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#delete GoogleCloudAssetFolderFeed#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#update GoogleCloudAssetFolderFeed#update}.

---

##### `reset_asset_names` <a name="reset_asset_names" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetAssetNames"></a>

```python
def reset_asset_names() -> None
```

##### `reset_asset_types` <a name="reset_asset_types" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetAssetTypes"></a>

```python
def reset_asset_types() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference">GoogleCloudAssetFolderFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference">GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folderId">folder_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference">GoogleCloudAssetFolderFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetNamesInput">asset_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetTypesInput">asset_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.billingProjectInput">billing_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedIdInput">feed_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedOutputConfigInput">feed_output_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.billingProject">billing_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedId">feed_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.condition"></a>

```python
condition: GoogleCloudAssetFolderFeedConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference">GoogleCloudAssetFolderFeedConditionOutputReference</a>

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedOutputConfig"></a>

```python
feed_output_config: GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference">GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference</a>

---

##### `folder_id`<sup>Required</sup> <a name="folder_id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folderId"></a>

```python
folder_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.timeouts"></a>

```python
timeouts: GoogleCloudAssetFolderFeedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference">GoogleCloudAssetFolderFeedTimeoutsOutputReference</a>

---

##### `asset_names_input`<sup>Optional</sup> <a name="asset_names_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetNamesInput"></a>

```python
asset_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_types_input`<sup>Optional</sup> <a name="asset_types_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetTypesInput"></a>

```python
asset_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_project_input`<sup>Optional</sup> <a name="billing_project_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.billingProjectInput"></a>

```python
billing_project_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.conditionInput"></a>

```python
condition_input: GoogleCloudAssetFolderFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a>

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `feed_id_input`<sup>Optional</sup> <a name="feed_id_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedIdInput"></a>

```python
feed_id_input: str
```

- *Type:* str

---

##### `feed_output_config_input`<sup>Optional</sup> <a name="feed_output_config_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedOutputConfigInput"></a>

```python
feed_output_config_input: GoogleCloudAssetFolderFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a>

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleCloudAssetFolderFeedTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>, cdktf.IResolvable]

---

##### `asset_names`<sup>Required</sup> <a name="asset_names" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetNames"></a>

```python
asset_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_types`<sup>Required</sup> <a name="asset_types" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedId"></a>

```python
feed_id: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudAssetFolderFeedCondition <a name="GoogleCloudAssetFolderFeedCondition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#expression GoogleCloudAssetFolderFeed#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#description GoogleCloudAssetFolderFeed#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#location GoogleCloudAssetFolderFeed#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#title GoogleCloudAssetFolderFeed#title}

---

### GoogleCloudAssetFolderFeedConfig <a name="GoogleCloudAssetFolderFeedConfig" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_project: str,
  feed_id: str,
  feed_output_config: GoogleCloudAssetFolderFeedFeedOutputConfig,
  folder: str,
  asset_names: typing.List[str] = None,
  asset_types: typing.List[str] = None,
  condition: GoogleCloudAssetFolderFeedCondition = None,
  content_type: str = None,
  id: str = None,
  timeouts: GoogleCloudAssetFolderFeedTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.billingProject">billing_project</a></code> | <code>str</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.feedId">feed_id</a></code> | <code>str</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.folder">folder</a></code> | <code>str</code> | The folder this feed should be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.contentType">content_type</a></code> | <code>str</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#id GoogleCloudAssetFolderFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#billing_project GoogleCloudAssetFolderFeed#billing_project}

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.feedId"></a>

```python
feed_id: str
```

- *Type:* str

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#feed_id GoogleCloudAssetFolderFeed#feed_id}

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.feedOutputConfig"></a>

```python
feed_output_config: GoogleCloudAssetFolderFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#feed_output_config GoogleCloudAssetFolderFeed#feed_output_config}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The folder this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#folder GoogleCloudAssetFolderFeed#folder}

---

##### `asset_names`<sup>Optional</sup> <a name="asset_names" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.assetNames"></a>

```python
asset_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#asset_names GoogleCloudAssetFolderFeed#asset_names}

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#asset_types GoogleCloudAssetFolderFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.condition"></a>

```python
condition: GoogleCloudAssetFolderFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#condition GoogleCloudAssetFolderFeed#condition}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#content_type GoogleCloudAssetFolderFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#id GoogleCloudAssetFolderFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudAssetFolderFeedTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#timeouts GoogleCloudAssetFolderFeed#timeouts}

---

### GoogleCloudAssetFolderFeedFeedOutputConfig <a name="GoogleCloudAssetFolderFeedFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig(
  pubsub_destination: GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig.property.pubsubDestination"></a>

```python
pubsub_destination: GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#pubsub_destination GoogleCloudAssetFolderFeed#pubsub_destination}

---

### GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination <a name="GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination(
  topic: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination.property.topic">topic</a></code> | <code>str</code> | Destination on Cloud Pubsub topic. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```python
topic: str
```

- *Type:* str

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#topic GoogleCloudAssetFolderFeed#topic}

---

### GoogleCloudAssetFolderFeedTimeouts <a name="GoogleCloudAssetFolderFeedTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#create GoogleCloudAssetFolderFeed#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#delete GoogleCloudAssetFolderFeed#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#update GoogleCloudAssetFolderFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#create GoogleCloudAssetFolderFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#delete GoogleCloudAssetFolderFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#update GoogleCloudAssetFolderFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudAssetFolderFeedConditionOutputReference <a name="GoogleCloudAssetFolderFeedConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudAssetFolderFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a>

---


### GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference <a name="GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.putPubsubDestination">put_pubsub_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pubsub_destination` <a name="put_pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```python
def put_pubsub_destination(
  topic: str
) -> None
```

###### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.topic"></a>

- *Type:* str

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloud_asset_folder_feed#topic GoogleCloudAssetFolderFeed#topic}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">pubsub_destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```python
pubsub_destination: GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `pubsub_destination_input`<sup>Optional</sup> <a name="pubsub_destination_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```python
pubsub_destination_input: GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudAssetFolderFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a>

---


### GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference <a name="GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

---


### GoogleCloudAssetFolderFeedTimeoutsOutputReference <a name="GoogleCloudAssetFolderFeedTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_folder_feed

googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleCloudAssetFolderFeedTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>, cdktf.IResolvable]

---



