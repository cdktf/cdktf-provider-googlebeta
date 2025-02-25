# `googleIntegrationsClient` Submodule <a name="`googleIntegrationsClient` Submodule" id="@cdktf/provider-google-beta.googleIntegrationsClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationsClient <a name="GoogleIntegrationsClient" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client google_integrations_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClient(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  cloud_kms_config: GoogleIntegrationsClientCloudKmsConfig = None,
  create_sample_integrations: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  run_as_service_account: str = None,
  timeouts: GoogleIntegrationsClientTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.location">location</a></code> | <code>str</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.cloudKmsConfig">cloud_kms_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | cloud_kms_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.createSampleIntegrations">create_sample_integrations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if sample integrations should be created along with provisioning. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#id GoogleIntegrationsClient#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#project GoogleIntegrationsClient#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.runAsServiceAccount">run_as_service_account</a></code> | <code>str</code> | User input run-as service account, if empty, will bring up a new default service account. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.location"></a>

- *Type:* str

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#location GoogleIntegrationsClient#location}

---

##### `cloud_kms_config`<sup>Optional</sup> <a name="cloud_kms_config" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.cloudKmsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#cloud_kms_config GoogleIntegrationsClient#cloud_kms_config}

---

##### `create_sample_integrations`<sup>Optional</sup> <a name="create_sample_integrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.createSampleIntegrations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if sample integrations should be created along with provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#create_sample_integrations GoogleIntegrationsClient#create_sample_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#id GoogleIntegrationsClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#project GoogleIntegrationsClient#project}.

---

##### `run_as_service_account`<sup>Optional</sup> <a name="run_as_service_account" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.runAsServiceAccount"></a>

- *Type:* str

User input run-as service account, if empty, will bring up a new default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#run_as_service_account GoogleIntegrationsClient#run_as_service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#timeouts GoogleIntegrationsClient#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig">put_cloud_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCloudKmsConfig">reset_cloud_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCreateSampleIntegrations">reset_create_sample_integrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetRunAsServiceAccount">reset_run_as_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_kms_config` <a name="put_cloud_kms_config" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig"></a>

```python
def put_cloud_kms_config(
  key: str,
  kms_location: str,
  kms_ring: str,
  key_version: str = None,
  kms_project_id: str = None
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig.parameter.key"></a>

- *Type:* str

A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key.

A key exists on exactly one key ring tied to a
specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#key GoogleIntegrationsClient#key}

---

###### `kms_location`<sup>Required</sup> <a name="kms_location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig.parameter.kmsLocation"></a>

- *Type:* str

Location name of the key ring, e.g. "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#kms_location GoogleIntegrationsClient#kms_location}

---

###### `kms_ring`<sup>Required</sup> <a name="kms_ring" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig.parameter.kmsRing"></a>

- *Type:* str

A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys.

A key ring's name does not need to be
unique across a Google Cloud project, but must be unique within a given location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#kms_ring GoogleIntegrationsClient#kms_ring}

---

###### `key_version`<sup>Optional</sup> <a name="key_version" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig.parameter.keyVersion"></a>

- *Type:* str

Each version of a key contains key material used for encryption or signing.

A key's version is represented by an integer, starting at 1. To decrypt data
or verify a signature, you must use the same key version that was used to
encrypt or sign the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#key_version GoogleIntegrationsClient#key_version}

---

###### `kms_project_id`<sup>Optional</sup> <a name="kms_project_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig.parameter.kmsProjectId"></a>

- *Type:* str

The Google Cloud project id of the project where the kms key stored.

If empty,
the kms key is stored at the same project as customer's project and ecrypted
with CMEK, otherwise, the kms key is stored in the tenant project and
encrypted with GMEK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#kms_project_id GoogleIntegrationsClient#kms_project_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#create GoogleIntegrationsClient#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#delete GoogleIntegrationsClient#delete}.

---

##### `reset_cloud_kms_config` <a name="reset_cloud_kms_config" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCloudKmsConfig"></a>

```python
def reset_cloud_kms_config() -> None
```

##### `reset_create_sample_integrations` <a name="reset_create_sample_integrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCreateSampleIntegrations"></a>

```python
def reset_create_sample_integrations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_run_as_service_account` <a name="reset_run_as_service_account" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetRunAsServiceAccount"></a>

```python
def reset_run_as_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIntegrationsClient resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClient.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClient.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClient.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIntegrationsClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIntegrationsClient to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIntegrationsClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationsClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfig">cloud_kms_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference">GoogleIntegrationsClientCloudKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference">GoogleIntegrationsClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfigInput">cloud_kms_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrationsInput">create_sample_integrations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccountInput">run_as_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrations">create_sample_integrations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccount">run_as_service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_kms_config`<sup>Required</sup> <a name="cloud_kms_config" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfig"></a>

```python
cloud_kms_config: GoogleIntegrationsClientCloudKmsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference">GoogleIntegrationsClientCloudKmsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeouts"></a>

```python
timeouts: GoogleIntegrationsClientTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference">GoogleIntegrationsClientTimeoutsOutputReference</a>

---

##### `cloud_kms_config_input`<sup>Optional</sup> <a name="cloud_kms_config_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfigInput"></a>

```python
cloud_kms_config_input: GoogleIntegrationsClientCloudKmsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

---

##### `create_sample_integrations_input`<sup>Optional</sup> <a name="create_sample_integrations_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrationsInput"></a>

```python
create_sample_integrations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `run_as_service_account_input`<sup>Optional</sup> <a name="run_as_service_account_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccountInput"></a>

```python
run_as_service_account_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIntegrationsClientTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>]

---

##### `create_sample_integrations`<sup>Required</sup> <a name="create_sample_integrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrations"></a>

```python
create_sample_integrations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `run_as_service_account`<sup>Required</sup> <a name="run_as_service_account" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccount"></a>

```python
run_as_service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationsClientCloudKmsConfig <a name="GoogleIntegrationsClientCloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig(
  key: str,
  kms_location: str,
  kms_ring: str,
  key_version: str = None,
  kms_project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.key">key</a></code> | <code>str</code> | A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsLocation">kms_location</a></code> | <code>str</code> | Location name of the key ring, e.g. "us-west1". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsRing">kms_ring</a></code> | <code>str</code> | A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.keyVersion">key_version</a></code> | <code>str</code> | Each version of a key contains key material used for encryption or signing. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsProjectId">kms_project_id</a></code> | <code>str</code> | The Google Cloud project id of the project where the kms key stored. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.key"></a>

```python
key: str
```

- *Type:* str

A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key.

A key exists on exactly one key ring tied to a
specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#key GoogleIntegrationsClient#key}

---

##### `kms_location`<sup>Required</sup> <a name="kms_location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsLocation"></a>

```python
kms_location: str
```

- *Type:* str

Location name of the key ring, e.g. "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#kms_location GoogleIntegrationsClient#kms_location}

---

##### `kms_ring`<sup>Required</sup> <a name="kms_ring" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsRing"></a>

```python
kms_ring: str
```

- *Type:* str

A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys.

A key ring's name does not need to be
unique across a Google Cloud project, but must be unique within a given location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#kms_ring GoogleIntegrationsClient#kms_ring}

---

##### `key_version`<sup>Optional</sup> <a name="key_version" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

Each version of a key contains key material used for encryption or signing.

A key's version is represented by an integer, starting at 1. To decrypt data
or verify a signature, you must use the same key version that was used to
encrypt or sign the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#key_version GoogleIntegrationsClient#key_version}

---

##### `kms_project_id`<sup>Optional</sup> <a name="kms_project_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsProjectId"></a>

```python
kms_project_id: str
```

- *Type:* str

The Google Cloud project id of the project where the kms key stored.

If empty,
the kms key is stored at the same project as customer's project and ecrypted
with CMEK, otherwise, the kms key is stored in the tenant project and
encrypted with GMEK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#kms_project_id GoogleIntegrationsClient#kms_project_id}

---

### GoogleIntegrationsClientConfig <a name="GoogleIntegrationsClientConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClientConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  cloud_kms_config: GoogleIntegrationsClientCloudKmsConfig = None,
  create_sample_integrations: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  run_as_service_account: str = None,
  timeouts: GoogleIntegrationsClientTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.location">location</a></code> | <code>str</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.cloudKmsConfig">cloud_kms_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | cloud_kms_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.createSampleIntegrations">create_sample_integrations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if sample integrations should be created along with provisioning. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#id GoogleIntegrationsClient#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#project GoogleIntegrationsClient#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.runAsServiceAccount">run_as_service_account</a></code> | <code>str</code> | User input run-as service account, if empty, will bring up a new default service account. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#location GoogleIntegrationsClient#location}

---

##### `cloud_kms_config`<sup>Optional</sup> <a name="cloud_kms_config" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.cloudKmsConfig"></a>

```python
cloud_kms_config: GoogleIntegrationsClientCloudKmsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#cloud_kms_config GoogleIntegrationsClient#cloud_kms_config}

---

##### `create_sample_integrations`<sup>Optional</sup> <a name="create_sample_integrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.createSampleIntegrations"></a>

```python
create_sample_integrations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if sample integrations should be created along with provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#create_sample_integrations GoogleIntegrationsClient#create_sample_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#id GoogleIntegrationsClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#project GoogleIntegrationsClient#project}.

---

##### `run_as_service_account`<sup>Optional</sup> <a name="run_as_service_account" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.runAsServiceAccount"></a>

```python
run_as_service_account: str
```

- *Type:* str

User input run-as service account, if empty, will bring up a new default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#run_as_service_account GoogleIntegrationsClient#run_as_service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.timeouts"></a>

```python
timeouts: GoogleIntegrationsClientTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#timeouts GoogleIntegrationsClient#timeouts}

---

### GoogleIntegrationsClientTimeouts <a name="GoogleIntegrationsClientTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClientTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#create GoogleIntegrationsClient#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#delete GoogleIntegrationsClient#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#create GoogleIntegrationsClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_integrations_client#delete GoogleIntegrationsClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationsClientCloudKmsConfigOutputReference <a name="GoogleIntegrationsClientCloudKmsConfigOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion">reset_key_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId">reset_kms_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_version` <a name="reset_key_version" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion"></a>

```python
def reset_key_version() -> None
```

##### `reset_kms_project_id` <a name="reset_kms_project_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId"></a>

```python
def reset_kms_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput">key_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput">kms_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput">kms_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput">kms_ring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersion">key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation">kms_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId">kms_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRing">kms_ring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `key_version_input`<sup>Optional</sup> <a name="key_version_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput"></a>

```python
key_version_input: str
```

- *Type:* str

---

##### `kms_location_input`<sup>Optional</sup> <a name="kms_location_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput"></a>

```python
kms_location_input: str
```

- *Type:* str

---

##### `kms_project_id_input`<sup>Optional</sup> <a name="kms_project_id_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput"></a>

```python
kms_project_id_input: str
```

- *Type:* str

---

##### `kms_ring_input`<sup>Optional</sup> <a name="kms_ring_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput"></a>

```python
kms_ring_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

---

##### `kms_location`<sup>Required</sup> <a name="kms_location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation"></a>

```python
kms_location: str
```

- *Type:* str

---

##### `kms_project_id`<sup>Required</sup> <a name="kms_project_id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId"></a>

```python
kms_project_id: str
```

- *Type:* str

---

##### `kms_ring`<sup>Required</sup> <a name="kms_ring" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRing"></a>

```python
kms_ring: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsClientCloudKmsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

---


### GoogleIntegrationsClientTimeoutsOutputReference <a name="GoogleIntegrationsClientTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_client

googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIntegrationsClientTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>]

---



