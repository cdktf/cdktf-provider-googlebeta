# `googleCloudAssetOrganizationFeed` Submodule <a name="`googleCloudAssetOrganizationFeed` Submodule" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudAssetOrganizationFeed <a name="GoogleCloudAssetOrganizationFeed" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed google_cloud_asset_organization_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed(
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
  feed_output_config: GoogleCloudAssetOrganizationFeedFeedOutputConfig,
  org_id: str,
  asset_names: typing.List[str] = None,
  asset_types: typing.List[str] = None,
  condition: GoogleCloudAssetOrganizationFeedCondition = None,
  content_type: str = None,
  id: str = None,
  timeouts: GoogleCloudAssetOrganizationFeedTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.billingProject">billing_project</a></code> | <code>str</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.feedId">feed_id</a></code> | <code>str</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The organization this feed should be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#id GoogleCloudAssetOrganizationFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.billingProject"></a>

- *Type:* str

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#billing_project GoogleCloudAssetOrganizationFeed#billing_project}

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.feedId"></a>

- *Type:* str

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#feed_id GoogleCloudAssetOrganizationFeed#feed_id}

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.feedOutputConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#feed_output_config GoogleCloudAssetOrganizationFeed#feed_output_config}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.orgId"></a>

- *Type:* str

The organization this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#org_id GoogleCloudAssetOrganizationFeed#org_id}

---

##### `asset_names`<sup>Optional</sup> <a name="asset_names" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.assetNames"></a>

- *Type:* typing.List[str]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#asset_names GoogleCloudAssetOrganizationFeed#asset_names}

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.assetTypes"></a>

- *Type:* typing.List[str]

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#asset_types GoogleCloudAssetOrganizationFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#condition GoogleCloudAssetOrganizationFeed#condition}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.contentType"></a>

- *Type:* str

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#content_type GoogleCloudAssetOrganizationFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#id GoogleCloudAssetOrganizationFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#timeouts GoogleCloudAssetOrganizationFeed#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putFeedOutputConfig">put_feed_output_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetNames">reset_asset_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetTypes">reset_asset_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition"></a>

```python
def put_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#expression GoogleCloudAssetOrganizationFeed#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#description GoogleCloudAssetOrganizationFeed#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#location GoogleCloudAssetOrganizationFeed#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#title GoogleCloudAssetOrganizationFeed#title}

---

##### `put_feed_output_config` <a name="put_feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putFeedOutputConfig"></a>

```python
def put_feed_output_config(
  pubsub_destination: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
) -> None
```

###### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putFeedOutputConfig.parameter.pubsubDestination"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#pubsub_destination GoogleCloudAssetOrganizationFeed#pubsub_destination}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#create GoogleCloudAssetOrganizationFeed#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#delete GoogleCloudAssetOrganizationFeed#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#update GoogleCloudAssetOrganizationFeed#update}.

---

##### `reset_asset_names` <a name="reset_asset_names" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetNames"></a>

```python
def reset_asset_names() -> None
```

##### `reset_asset_types` <a name="reset_asset_types" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetTypes"></a>

```python
def reset_asset_types() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleCloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleCloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudAssetOrganizationFeed to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudAssetOrganizationFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudAssetOrganizationFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference">GoogleCloudAssetOrganizationFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference">GoogleCloudAssetOrganizationFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNamesInput">asset_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypesInput">asset_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProjectInput">billing_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedIdInput">feed_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfigInput">feed_output_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProject">billing_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedId">feed_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.condition"></a>

```python
condition: GoogleCloudAssetOrganizationFeedConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference">GoogleCloudAssetOrganizationFeedConditionOutputReference</a>

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfig"></a>

```python
feed_output_config: GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeouts"></a>

```python
timeouts: GoogleCloudAssetOrganizationFeedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference">GoogleCloudAssetOrganizationFeedTimeoutsOutputReference</a>

---

##### `asset_names_input`<sup>Optional</sup> <a name="asset_names_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNamesInput"></a>

```python
asset_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_types_input`<sup>Optional</sup> <a name="asset_types_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypesInput"></a>

```python
asset_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_project_input`<sup>Optional</sup> <a name="billing_project_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProjectInput"></a>

```python
billing_project_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.conditionInput"></a>

```python
condition_input: GoogleCloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `feed_id_input`<sup>Optional</sup> <a name="feed_id_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedIdInput"></a>

```python
feed_id_input: str
```

- *Type:* str

---

##### `feed_output_config_input`<sup>Optional</sup> <a name="feed_output_config_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfigInput"></a>

```python
feed_output_config_input: GoogleCloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCloudAssetOrganizationFeedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>]

---

##### `asset_names`<sup>Required</sup> <a name="asset_names" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNames"></a>

```python
asset_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_types`<sup>Required</sup> <a name="asset_types" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedId"></a>

```python
feed_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudAssetOrganizationFeedCondition <a name="GoogleCloudAssetOrganizationFeedCondition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#expression GoogleCloudAssetOrganizationFeed#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#description GoogleCloudAssetOrganizationFeed#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#location GoogleCloudAssetOrganizationFeed#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#title GoogleCloudAssetOrganizationFeed#title}

---

### GoogleCloudAssetOrganizationFeedConfig <a name="GoogleCloudAssetOrganizationFeedConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_project: str,
  feed_id: str,
  feed_output_config: GoogleCloudAssetOrganizationFeedFeedOutputConfig,
  org_id: str,
  asset_names: typing.List[str] = None,
  asset_types: typing.List[str] = None,
  condition: GoogleCloudAssetOrganizationFeedCondition = None,
  content_type: str = None,
  id: str = None,
  timeouts: GoogleCloudAssetOrganizationFeedTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.billingProject">billing_project</a></code> | <code>str</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedId">feed_id</a></code> | <code>str</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.orgId">org_id</a></code> | <code>str</code> | The organization this feed should be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.contentType">content_type</a></code> | <code>str</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#id GoogleCloudAssetOrganizationFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#billing_project GoogleCloudAssetOrganizationFeed#billing_project}

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedId"></a>

```python
feed_id: str
```

- *Type:* str

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#feed_id GoogleCloudAssetOrganizationFeed#feed_id}

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedOutputConfig"></a>

```python
feed_output_config: GoogleCloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#feed_output_config GoogleCloudAssetOrganizationFeed#feed_output_config}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The organization this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#org_id GoogleCloudAssetOrganizationFeed#org_id}

---

##### `asset_names`<sup>Optional</sup> <a name="asset_names" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetNames"></a>

```python
asset_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#asset_names GoogleCloudAssetOrganizationFeed#asset_names}

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetTypes"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#asset_types GoogleCloudAssetOrganizationFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.condition"></a>

```python
condition: GoogleCloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#condition GoogleCloudAssetOrganizationFeed#condition}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#content_type GoogleCloudAssetOrganizationFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#id GoogleCloudAssetOrganizationFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudAssetOrganizationFeedTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#timeouts GoogleCloudAssetOrganizationFeed#timeouts}

---

### GoogleCloudAssetOrganizationFeedFeedOutputConfig <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig(
  pubsub_destination: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination"></a>

```python
pubsub_destination: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#pubsub_destination GoogleCloudAssetOrganizationFeed#pubsub_destination}

---

### GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination(
  topic: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic">topic</a></code> | <code>str</code> | Destination on Cloud Pubsub topic. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```python
topic: str
```

- *Type:* str

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#topic GoogleCloudAssetOrganizationFeed#topic}

---

### GoogleCloudAssetOrganizationFeedTimeouts <a name="GoogleCloudAssetOrganizationFeedTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#create GoogleCloudAssetOrganizationFeed#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#delete GoogleCloudAssetOrganizationFeed#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#update GoogleCloudAssetOrganizationFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#create GoogleCloudAssetOrganizationFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#delete GoogleCloudAssetOrganizationFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#update GoogleCloudAssetOrganizationFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudAssetOrganizationFeedConditionOutputReference <a name="GoogleCloudAssetOrganizationFeedConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

---


### GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination">put_pubsub_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pubsub_destination` <a name="put_pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```python
def put_pubsub_destination(
  topic: str
) -> None
```

###### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.topic"></a>

- *Type:* str

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloud_asset_organization_feed#topic GoogleCloudAssetOrganizationFeed#topic}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">pubsub_destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```python
pubsub_destination: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `pubsub_destination_input`<sup>Optional</sup> <a name="pubsub_destination_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```python
pubsub_destination_input: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

---


### GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


### GoogleCloudAssetOrganizationFeedTimeoutsOutputReference <a name="GoogleCloudAssetOrganizationFeedTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_asset_organization_feed

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudAssetOrganizationFeedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>]

---



