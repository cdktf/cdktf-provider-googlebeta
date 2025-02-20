# `googleBigqueryAnalyticsHubDataExchangeIamMember` Submodule <a name="`googleBigqueryAnalyticsHubDataExchangeIamMember` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeIamMember <a name="GoogleBigqueryAnalyticsHubDataExchangeIamMember" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member google_bigquery_analytics_hub_data_exchange_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_member

googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  member: str,
  role: str,
  condition: GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#member GoogleBigqueryAnalyticsHubDataExchangeIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#role GoogleBigqueryAnalyticsHubDataExchangeIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition">GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#id GoogleBigqueryAnalyticsHubDataExchangeIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#location GoogleBigqueryAnalyticsHubDataExchangeIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#project GoogleBigqueryAnalyticsHubDataExchangeIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.dataExchangeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#member GoogleBigqueryAnalyticsHubDataExchangeIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#role GoogleBigqueryAnalyticsHubDataExchangeIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition">GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#condition GoogleBigqueryAnalyticsHubDataExchangeIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#id GoogleBigqueryAnalyticsHubDataExchangeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#location GoogleBigqueryAnalyticsHubDataExchangeIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#project GoogleBigqueryAnalyticsHubDataExchangeIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#expression GoogleBigqueryAnalyticsHubDataExchangeIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#title GoogleBigqueryAnalyticsHubDataExchangeIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#description GoogleBigqueryAnalyticsHubDataExchangeIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_member

googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_member

googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_member

googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_member

googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchangeIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryAnalyticsHubDataExchangeIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchangeIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference">GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition">GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeIdInput">data_exchange_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.condition"></a>

```python
condition: GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference">GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.conditionInput"></a>

```python
condition_input: GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition">GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

---

##### `data_exchange_id_input`<sup>Optional</sup> <a name="data_exchange_id_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeIdInput"></a>

```python
data_exchange_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition <a name="GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_member

googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#expression GoogleBigqueryAnalyticsHubDataExchangeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#title GoogleBigqueryAnalyticsHubDataExchangeIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#description GoogleBigqueryAnalyticsHubDataExchangeIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#expression GoogleBigqueryAnalyticsHubDataExchangeIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#title GoogleBigqueryAnalyticsHubDataExchangeIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#description GoogleBigqueryAnalyticsHubDataExchangeIamMember#description}.

---

### GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_member

googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  member: str,
  role: str,
  condition: GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#member GoogleBigqueryAnalyticsHubDataExchangeIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#role GoogleBigqueryAnalyticsHubDataExchangeIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition">GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#id GoogleBigqueryAnalyticsHubDataExchangeIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#location GoogleBigqueryAnalyticsHubDataExchangeIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#project GoogleBigqueryAnalyticsHubDataExchangeIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#member GoogleBigqueryAnalyticsHubDataExchangeIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#role GoogleBigqueryAnalyticsHubDataExchangeIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.condition"></a>

```python
condition: GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition">GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#condition GoogleBigqueryAnalyticsHubDataExchangeIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#id GoogleBigqueryAnalyticsHubDataExchangeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#location GoogleBigqueryAnalyticsHubDataExchangeIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_member#project GoogleBigqueryAnalyticsHubDataExchangeIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_member

googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition">GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamMember.GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition">GoogleBigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

---



