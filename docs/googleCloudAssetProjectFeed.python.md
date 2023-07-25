# `google_cloud_asset_project_feed`

Refer to the Terraform Registory for docs: [`google_cloud_asset_project_feed`](https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed).

# `googleCloudAssetProjectFeed` Submodule <a name="`googleCloudAssetProjectFeed` Submodule" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudAssetProjectFeed <a name="GoogleCloudAssetProjectFeed" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed google_cloud_asset_project_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feed_id: str,
  feed_output_config: GoogleCloudAssetProjectFeedFeedOutputConfig,
  asset_names: typing.List[str] = None,
  asset_types: typing.List[str] = None,
  billing_project: str = None,
  condition: GoogleCloudAssetProjectFeedCondition = None,
  content_type: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleCloudAssetProjectFeedTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.feedId">feed_id</a></code> | <code>str</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.billingProject">billing_project</a></code> | <code>str</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#id GoogleCloudAssetProjectFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#project GoogleCloudAssetProjectFeed#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.feedId"></a>

- *Type:* str

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#feed_id GoogleCloudAssetProjectFeed#feed_id}

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.feedOutputConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#feed_output_config GoogleCloudAssetProjectFeed#feed_output_config}

---

##### `asset_names`<sup>Optional</sup> <a name="asset_names" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.assetNames"></a>

- *Type:* typing.List[str]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#asset_names GoogleCloudAssetProjectFeed#asset_names}

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.assetTypes"></a>

- *Type:* typing.List[str]

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#asset_types GoogleCloudAssetProjectFeed#asset_types}

---

##### `billing_project`<sup>Optional</sup> <a name="billing_project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.billingProject"></a>

- *Type:* str

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing. If not specified, the resource's
project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#billing_project GoogleCloudAssetProjectFeed#billing_project}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#condition GoogleCloudAssetProjectFeed#condition}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.contentType"></a>

- *Type:* str

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#content_type GoogleCloudAssetProjectFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#id GoogleCloudAssetProjectFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#project GoogleCloudAssetProjectFeed#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#timeouts GoogleCloudAssetProjectFeed#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putFeedOutputConfig">put_feed_output_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetAssetNames">reset_asset_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetAssetTypes">reset_asset_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetBillingProject">reset_billing_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putCondition"></a>

```python
def put_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#expression GoogleCloudAssetProjectFeed#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putCondition.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#description GoogleCloudAssetProjectFeed#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putCondition.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#location GoogleCloudAssetProjectFeed#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putCondition.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#title GoogleCloudAssetProjectFeed#title}

---

##### `put_feed_output_config` <a name="put_feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putFeedOutputConfig"></a>

```python
def put_feed_output_config(
  pubsub_destination: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination
) -> None
```

###### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putFeedOutputConfig.parameter.pubsubDestination"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#pubsub_destination GoogleCloudAssetProjectFeed#pubsub_destination}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#create GoogleCloudAssetProjectFeed#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#delete GoogleCloudAssetProjectFeed#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#update GoogleCloudAssetProjectFeed#update}.

---

##### `reset_asset_names` <a name="reset_asset_names" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetAssetNames"></a>

```python
def reset_asset_names() -> None
```

##### `reset_asset_types` <a name="reset_asset_types" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetAssetTypes"></a>

```python
def reset_asset_types() -> None
```

##### `reset_billing_project` <a name="reset_billing_project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetBillingProject"></a>

```python
def reset_billing_project() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference">GoogleCloudAssetProjectFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference">GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference">GoogleCloudAssetProjectFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetNamesInput">asset_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetTypesInput">asset_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.billingProjectInput">billing_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedIdInput">feed_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedOutputConfigInput">feed_output_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.billingProject">billing_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedId">feed_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.condition"></a>

```python
condition: GoogleCloudAssetProjectFeedConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference">GoogleCloudAssetProjectFeedConditionOutputReference</a>

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedOutputConfig"></a>

```python
feed_output_config: GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference">GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.timeouts"></a>

```python
timeouts: GoogleCloudAssetProjectFeedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference">GoogleCloudAssetProjectFeedTimeoutsOutputReference</a>

---

##### `asset_names_input`<sup>Optional</sup> <a name="asset_names_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetNamesInput"></a>

```python
asset_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_types_input`<sup>Optional</sup> <a name="asset_types_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetTypesInput"></a>

```python
asset_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_project_input`<sup>Optional</sup> <a name="billing_project_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.billingProjectInput"></a>

```python
billing_project_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.conditionInput"></a>

```python
condition_input: GoogleCloudAssetProjectFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a>

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `feed_id_input`<sup>Optional</sup> <a name="feed_id_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedIdInput"></a>

```python
feed_id_input: str
```

- *Type:* str

---

##### `feed_output_config_input`<sup>Optional</sup> <a name="feed_output_config_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedOutputConfigInput"></a>

```python
feed_output_config_input: GoogleCloudAssetProjectFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCloudAssetProjectFeedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>]

---

##### `asset_names`<sup>Required</sup> <a name="asset_names" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetNames"></a>

```python
asset_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_types`<sup>Required</sup> <a name="asset_types" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedId"></a>

```python
feed_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudAssetProjectFeedCondition <a name="GoogleCloudAssetProjectFeedCondition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#expression GoogleCloudAssetProjectFeed#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#description GoogleCloudAssetProjectFeed#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#location GoogleCloudAssetProjectFeed#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#title GoogleCloudAssetProjectFeed#title}

---

### GoogleCloudAssetProjectFeedConfig <a name="GoogleCloudAssetProjectFeedConfig" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feed_id: str,
  feed_output_config: GoogleCloudAssetProjectFeedFeedOutputConfig,
  asset_names: typing.List[str] = None,
  asset_types: typing.List[str] = None,
  billing_project: str = None,
  condition: GoogleCloudAssetProjectFeedCondition = None,
  content_type: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleCloudAssetProjectFeedTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.feedId">feed_id</a></code> | <code>str</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.billingProject">billing_project</a></code> | <code>str</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.contentType">content_type</a></code> | <code>str</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#id GoogleCloudAssetProjectFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#project GoogleCloudAssetProjectFeed#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.feedId"></a>

```python
feed_id: str
```

- *Type:* str

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#feed_id GoogleCloudAssetProjectFeed#feed_id}

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.feedOutputConfig"></a>

```python
feed_output_config: GoogleCloudAssetProjectFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#feed_output_config GoogleCloudAssetProjectFeed#feed_output_config}

---

##### `asset_names`<sup>Optional</sup> <a name="asset_names" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.assetNames"></a>

```python
asset_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#asset_names GoogleCloudAssetProjectFeed#asset_names}

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.assetTypes"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#asset_types GoogleCloudAssetProjectFeed#asset_types}

---

##### `billing_project`<sup>Optional</sup> <a name="billing_project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing. If not specified, the resource's
project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#billing_project GoogleCloudAssetProjectFeed#billing_project}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.condition"></a>

```python
condition: GoogleCloudAssetProjectFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#condition GoogleCloudAssetProjectFeed#condition}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#content_type GoogleCloudAssetProjectFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#id GoogleCloudAssetProjectFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#project GoogleCloudAssetProjectFeed#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudAssetProjectFeedTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#timeouts GoogleCloudAssetProjectFeed#timeouts}

---

### GoogleCloudAssetProjectFeedFeedOutputConfig <a name="GoogleCloudAssetProjectFeedFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig(
  pubsub_destination: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination"></a>

```python
pubsub_destination: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#pubsub_destination GoogleCloudAssetProjectFeed#pubsub_destination}

---

### GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination <a name="GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination(
  topic: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic">topic</a></code> | <code>str</code> | Destination on Cloud Pubsub topic. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```python
topic: str
```

- *Type:* str

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#topic GoogleCloudAssetProjectFeed#topic}

---

### GoogleCloudAssetProjectFeedTimeouts <a name="GoogleCloudAssetProjectFeedTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#create GoogleCloudAssetProjectFeed#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#delete GoogleCloudAssetProjectFeed#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#update GoogleCloudAssetProjectFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#create GoogleCloudAssetProjectFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#delete GoogleCloudAssetProjectFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#update GoogleCloudAssetProjectFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudAssetProjectFeedConditionOutputReference <a name="GoogleCloudAssetProjectFeedConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudAssetProjectFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a>

---


### GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference <a name="GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination">put_pubsub_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pubsub_destination` <a name="put_pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```python
def put_pubsub_destination(
  topic: str
) -> None
```

###### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.topic"></a>

- *Type:* str

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_asset_project_feed#topic GoogleCloudAssetProjectFeed#topic}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">pubsub_destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```python
pubsub_destination: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `pubsub_destination_input`<sup>Optional</sup> <a name="pubsub_destination_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```python
pubsub_destination_input: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudAssetProjectFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a>

---


### GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference <a name="GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---


### GoogleCloudAssetProjectFeedTimeoutsOutputReference <a name="GoogleCloudAssetProjectFeedTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_project_feed

googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudAssetProjectFeedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>]

---



