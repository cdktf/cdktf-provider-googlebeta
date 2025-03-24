# `googleBigqueryDatapolicyDataPolicy` Submodule <a name="`googleBigqueryDatapolicyDataPolicy` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDatapolicyDataPolicy <a name="GoogleBigqueryDatapolicyDataPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_policy_id: str,
  data_policy_type: str,
  location: str,
  policy_tag: str,
  data_masking_policy: GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBigqueryDatapolicyDataPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataPolicyId">data_policy_id</a></code> | <code>str</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataPolicyType">data_policy_type</a></code> | <code>str</code> | The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location of the data policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.policyTag">policy_tag</a></code> | <code>str</code> | Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataMaskingPolicy">data_masking_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_policy_id`<sup>Required</sup> <a name="data_policy_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataPolicyId"></a>

- *Type:* str

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {dataPolicyId} in part of the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_id GoogleBigqueryDatapolicyDataPolicy#data_policy_id}

---

##### `data_policy_type`<sup>Required</sup> <a name="data_policy_type" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataPolicyType"></a>

- *Type:* str

The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_type GoogleBigqueryDatapolicyDataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.location"></a>

- *Type:* str

The name of the location of the data policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#location GoogleBigqueryDatapolicyDataPolicy#location}

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.policyTag"></a>

- *Type:* str

Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#policy_tag GoogleBigqueryDatapolicyDataPolicy#policy_tag}

---

##### `data_masking_policy`<sup>Optional</sup> <a name="data_masking_policy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataMaskingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#data_masking_policy GoogleBigqueryDatapolicyDataPolicy#data_masking_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#timeouts GoogleBigqueryDatapolicyDataPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy">put_data_masking_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetDataMaskingPolicy">reset_data_masking_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_masking_policy` <a name="put_data_masking_policy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy"></a>

```python
def put_data_masking_policy(
  predefined_expression: str = None,
  routine: str = None
) -> None
```

###### `predefined_expression`<sup>Optional</sup> <a name="predefined_expression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy.parameter.predefinedExpression"></a>

- *Type:* str

The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#predefined_expression GoogleBigqueryDatapolicyDataPolicy#predefined_expression}

---

###### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy.parameter.routine"></a>

- *Type:* str

The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#routine GoogleBigqueryDatapolicyDataPolicy#routine}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#create GoogleBigqueryDatapolicyDataPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#delete GoogleBigqueryDatapolicyDataPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#update GoogleBigqueryDatapolicyDataPolicy#update}.

---

##### `reset_data_masking_policy` <a name="reset_data_masking_policy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetDataMaskingPolicy"></a>

```python
def reset_data_masking_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryDatapolicyDataPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryDatapolicyDataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDatapolicyDataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicy">data_masking_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput">data_masking_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyIdInput">data_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput">data_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTagInput">policy_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyId">data_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyType">data_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTag">policy_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_masking_policy`<sup>Required</sup> <a name="data_masking_policy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicy"></a>

```python
data_masking_policy: GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeouts"></a>

```python
timeouts: GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference</a>

---

##### `data_masking_policy_input`<sup>Optional</sup> <a name="data_masking_policy_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput"></a>

```python
data_masking_policy_input: GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `data_policy_id_input`<sup>Optional</sup> <a name="data_policy_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyIdInput"></a>

```python
data_policy_id_input: str
```

- *Type:* str

---

##### `data_policy_type_input`<sup>Optional</sup> <a name="data_policy_type_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput"></a>

```python
data_policy_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_tag_input`<sup>Optional</sup> <a name="policy_tag_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTagInput"></a>

```python
policy_tag_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigqueryDatapolicyDataPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>]

---

##### `data_policy_id`<sup>Required</sup> <a name="data_policy_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyId"></a>

```python
data_policy_id: str
```

- *Type:* str

---

##### `data_policy_type`<sup>Required</sup> <a name="data_policy_type" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyType"></a>

```python
data_policy_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTag"></a>

```python
policy_tag: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDatapolicyDataPolicyConfig <a name="GoogleBigqueryDatapolicyDataPolicyConfig" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_policy_id: str,
  data_policy_type: str,
  location: str,
  policy_tag: str,
  data_masking_policy: GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBigqueryDatapolicyDataPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyId">data_policy_id</a></code> | <code>str</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyType">data_policy_type</a></code> | <code>str</code> | The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.location">location</a></code> | <code>str</code> | The name of the location of the data policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.policyTag">policy_tag</a></code> | <code>str</code> | Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy">data_masking_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_policy_id`<sup>Required</sup> <a name="data_policy_id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyId"></a>

```python
data_policy_id: str
```

- *Type:* str

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {dataPolicyId} in part of the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_id GoogleBigqueryDatapolicyDataPolicy#data_policy_id}

---

##### `data_policy_type`<sup>Required</sup> <a name="data_policy_type" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyType"></a>

```python
data_policy_type: str
```

- *Type:* str

The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_type GoogleBigqueryDatapolicyDataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location of the data policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#location GoogleBigqueryDatapolicyDataPolicy#location}

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.policyTag"></a>

```python
policy_tag: str
```

- *Type:* str

Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#policy_tag GoogleBigqueryDatapolicyDataPolicy#policy_tag}

---

##### `data_masking_policy`<sup>Optional</sup> <a name="data_masking_policy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy"></a>

```python
data_masking_policy: GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#data_masking_policy GoogleBigqueryDatapolicyDataPolicy#data_masking_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleBigqueryDatapolicyDataPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#timeouts GoogleBigqueryDatapolicyDataPolicy#timeouts}

---

### GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy <a name="GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy(
  predefined_expression: str = None,
  routine: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression">predefined_expression</a></code> | <code>str</code> | The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine">routine</a></code> | <code>str</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}. |

---

##### `predefined_expression`<sup>Optional</sup> <a name="predefined_expression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```python
predefined_expression: str
```

- *Type:* str

The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#predefined_expression GoogleBigqueryDatapolicyDataPolicy#predefined_expression}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine"></a>

```python
routine: str
```

- *Type:* str

The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#routine GoogleBigqueryDatapolicyDataPolicy#routine}

---

### GoogleBigqueryDatapolicyDataPolicyTimeouts <a name="GoogleBigqueryDatapolicyDataPolicyTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#create GoogleBigqueryDatapolicyDataPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#delete GoogleBigqueryDatapolicyDataPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#update GoogleBigqueryDatapolicyDataPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#create GoogleBigqueryDatapolicyDataPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#delete GoogleBigqueryDatapolicyDataPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_datapolicy_data_policy#update GoogleBigqueryDatapolicyDataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference <a name="GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">reset_predefined_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine">reset_routine</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_predefined_expression` <a name="reset_predefined_expression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```python
def reset_predefined_expression() -> None
```

##### `reset_routine` <a name="reset_routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```python
def reset_routine() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">predefined_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput">routine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">predefined_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine">routine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_expression_input`<sup>Optional</sup> <a name="predefined_expression_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```python
predefined_expression_input: str
```

- *Type:* str

---

##### `routine_input`<sup>Optional</sup> <a name="routine_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```python
routine_input: str
```

- *Type:* str

---

##### `predefined_expression`<sup>Required</sup> <a name="predefined_expression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```python
predefined_expression: str
```

- *Type:* str

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```python
routine: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---


### GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference <a name="GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_datapolicy_data_policy

googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryDatapolicyDataPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>]

---



