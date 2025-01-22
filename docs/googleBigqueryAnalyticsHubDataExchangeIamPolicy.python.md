# `googleBigqueryAnalyticsHubDataExchangeIamPolicy` Submodule <a name="`googleBigqueryAnalyticsHubDataExchangeIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeIamPolicy <a name="GoogleBigqueryAnalyticsHubDataExchangeIamPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy google_bigquery_analytics_hub_data_exchange_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_policy

googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy(
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
  policy_data: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#policy_data GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#id GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#location GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#project GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.dataExchangeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#data_exchange_id}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#policy_data GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#id GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#location GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#project GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_policy

googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_policy

googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_policy

googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_policy

googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchangeIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryAnalyticsHubDataExchangeIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchangeIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.dataExchangeIdInput">data_exchange_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `data_exchange_id_input`<sup>Optional</sup> <a name="data_exchange_id_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.dataExchangeIdInput"></a>

```python
data_exchange_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_iam_policy

googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  policy_data: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#policy_data GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#id GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#location GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#project GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#data_exchange_id}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#policy_data GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#id GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#location GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeIamPolicy.GoogleBigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_analytics_hub_data_exchange_iam_policy#project GoogleBigqueryAnalyticsHubDataExchangeIamPolicy#project}.

---



