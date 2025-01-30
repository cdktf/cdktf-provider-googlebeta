# `googleCloudRunDomainMapping` Submodule <a name="`googleCloudRunDomainMapping` Submodule" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunDomainMapping <a name="GoogleCloudRunDomainMapping" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping google_cloud_run_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMapping(
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
  name: str,
  spec: GoogleCloudRunDomainMappingSpec,
  id: str = None,
  metadata: GoogleCloudRunDomainMappingMetadata = None,
  project: str = None,
  timeouts: GoogleCloudRunDomainMappingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.name">name</a></code> | <code>str</code> | Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec">GoogleCloudRunDomainMappingSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#id GoogleCloudRunDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata">GoogleCloudRunDomainMappingMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#project GoogleCloudRunDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts">GoogleCloudRunDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.location"></a>

- *Type:* str

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#location GoogleCloudRunDomainMapping#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.name"></a>

- *Type:* str

Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#name GoogleCloudRunDomainMapping#name}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec">GoogleCloudRunDomainMappingSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#spec GoogleCloudRunDomainMapping#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#id GoogleCloudRunDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata">GoogleCloudRunDomainMappingMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#metadata GoogleCloudRunDomainMapping#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#project GoogleCloudRunDomainMapping#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts">GoogleCloudRunDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#timeouts GoogleCloudRunDomainMapping#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putMetadata"></a>

```python
def put_metadata(
  namespace: str,
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None
) -> None
```

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putMetadata.parameter.namespace"></a>

- *Type:* str

In Cloud Run the namespace must be equal to either the project ID or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#namespace GoogleCloudRunDomainMapping#namespace}

---

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#annotations GoogleCloudRunDomainMapping#annotations}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers
and routes.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#labels GoogleCloudRunDomainMapping#labels}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putSpec"></a>

```python
def put_spec(
  route_name: str,
  certificate_mode: str = None,
  force_override: typing.Union[bool, IResolvable] = None
) -> None
```

###### `route_name`<sup>Required</sup> <a name="route_name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putSpec.parameter.routeName"></a>

- *Type:* str

The name of the Cloud Run Service that this DomainMapping applies to. The route must exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#route_name GoogleCloudRunDomainMapping#route_name}

---

###### `certificate_mode`<sup>Optional</sup> <a name="certificate_mode" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putSpec.parameter.certificateMode"></a>

- *Type:* str

The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#certificate_mode GoogleCloudRunDomainMapping#certificate_mode}

---

###### `force_override`<sup>Optional</sup> <a name="force_override" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putSpec.parameter.forceOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the mapping will override any mapping set before this spec was set.

It is recommended that the user leaves this empty to receive an error
warning about a potential conflict and only set it once the respective UI
has given such a warning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#force_override GoogleCloudRunDomainMapping#force_override}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#create GoogleCloudRunDomainMapping#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#delete GoogleCloudRunDomainMapping#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleCloudRunDomainMapping resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleCloudRunDomainMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudRunDomainMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudRunDomainMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunDomainMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference">GoogleCloudRunDomainMappingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference">GoogleCloudRunDomainMappingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList">GoogleCloudRunDomainMappingStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference">GoogleCloudRunDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata">GoogleCloudRunDomainMappingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec">GoogleCloudRunDomainMappingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts">GoogleCloudRunDomainMappingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.metadata"></a>

```python
metadata: GoogleCloudRunDomainMappingMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference">GoogleCloudRunDomainMappingMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.spec"></a>

```python
spec: GoogleCloudRunDomainMappingSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference">GoogleCloudRunDomainMappingSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.status"></a>

```python
status: GoogleCloudRunDomainMappingStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList">GoogleCloudRunDomainMappingStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.timeouts"></a>

```python
timeouts: GoogleCloudRunDomainMappingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference">GoogleCloudRunDomainMappingTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.metadataInput"></a>

```python
metadata_input: GoogleCloudRunDomainMappingMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata">GoogleCloudRunDomainMappingMetadata</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.specInput"></a>

```python
spec_input: GoogleCloudRunDomainMappingSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec">GoogleCloudRunDomainMappingSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCloudRunDomainMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts">GoogleCloudRunDomainMappingTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunDomainMappingConfig <a name="GoogleCloudRunDomainMappingConfig" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  spec: GoogleCloudRunDomainMappingSpec,
  id: str = None,
  metadata: GoogleCloudRunDomainMappingMetadata = None,
  project: str = None,
  timeouts: GoogleCloudRunDomainMappingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.location">location</a></code> | <code>str</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.name">name</a></code> | <code>str</code> | Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec">GoogleCloudRunDomainMappingSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#id GoogleCloudRunDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata">GoogleCloudRunDomainMappingMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#project GoogleCloudRunDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts">GoogleCloudRunDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#location GoogleCloudRunDomainMapping#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#name GoogleCloudRunDomainMapping#name}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.spec"></a>

```python
spec: GoogleCloudRunDomainMappingSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec">GoogleCloudRunDomainMappingSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#spec GoogleCloudRunDomainMapping#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#id GoogleCloudRunDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.metadata"></a>

```python
metadata: GoogleCloudRunDomainMappingMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata">GoogleCloudRunDomainMappingMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#metadata GoogleCloudRunDomainMapping#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#project GoogleCloudRunDomainMapping#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudRunDomainMappingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts">GoogleCloudRunDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#timeouts GoogleCloudRunDomainMapping#timeouts}

---

### GoogleCloudRunDomainMappingMetadata <a name="GoogleCloudRunDomainMappingMetadata" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata(
  namespace: str,
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata.property.namespace">namespace</a></code> | <code>str</code> | In Cloud Run the namespace must be equal to either the project ID or project number. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

In Cloud Run the namespace must be equal to either the project ID or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#namespace GoogleCloudRunDomainMapping#namespace}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#annotations GoogleCloudRunDomainMapping#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers
and routes.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#labels GoogleCloudRunDomainMapping#labels}

---

### GoogleCloudRunDomainMappingSpec <a name="GoogleCloudRunDomainMappingSpec" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec(
  route_name: str,
  certificate_mode: str = None,
  force_override: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec.property.routeName">route_name</a></code> | <code>str</code> | The name of the Cloud Run Service that this DomainMapping applies to. The route must exist. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec.property.certificateMode">certificate_mode</a></code> | <code>str</code> | The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec.property.forceOverride">force_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the mapping will override any mapping set before this spec was set. |

---

##### `route_name`<sup>Required</sup> <a name="route_name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec.property.routeName"></a>

```python
route_name: str
```

- *Type:* str

The name of the Cloud Run Service that this DomainMapping applies to. The route must exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#route_name GoogleCloudRunDomainMapping#route_name}

---

##### `certificate_mode`<sup>Optional</sup> <a name="certificate_mode" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec.property.certificateMode"></a>

```python
certificate_mode: str
```

- *Type:* str

The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#certificate_mode GoogleCloudRunDomainMapping#certificate_mode}

---

##### `force_override`<sup>Optional</sup> <a name="force_override" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec.property.forceOverride"></a>

```python
force_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the mapping will override any mapping set before this spec was set.

It is recommended that the user leaves this empty to receive an error
warning about a potential conflict and only set it once the respective UI
has given such a warning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#force_override GoogleCloudRunDomainMapping#force_override}

---

### GoogleCloudRunDomainMappingStatus <a name="GoogleCloudRunDomainMappingStatus" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatus()
```


### GoogleCloudRunDomainMappingStatusConditions <a name="GoogleCloudRunDomainMappingStatusConditions" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditions()
```


### GoogleCloudRunDomainMappingStatusResourceRecords <a name="GoogleCloudRunDomainMappingStatusResourceRecords" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecords()
```


### GoogleCloudRunDomainMappingTimeouts <a name="GoogleCloudRunDomainMappingTimeouts" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#create GoogleCloudRunDomainMapping#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#delete GoogleCloudRunDomainMapping#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#create GoogleCloudRunDomainMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_run_domain_mapping#delete GoogleCloudRunDomainMapping#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunDomainMappingMetadataOutputReference <a name="GoogleCloudRunDomainMappingMetadataOutputReference" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata">GoogleCloudRunDomainMappingMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunDomainMappingMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingMetadata">GoogleCloudRunDomainMappingMetadata</a>

---


### GoogleCloudRunDomainMappingSpecOutputReference <a name="GoogleCloudRunDomainMappingSpecOutputReference" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.resetCertificateMode">reset_certificate_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.resetForceOverride">reset_force_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_mode` <a name="reset_certificate_mode" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.resetCertificateMode"></a>

```python
def reset_certificate_mode() -> None
```

##### `reset_force_override` <a name="reset_force_override" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.resetForceOverride"></a>

```python
def reset_force_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.certificateModeInput">certificate_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.forceOverrideInput">force_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.routeNameInput">route_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.certificateMode">certificate_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.forceOverride">force_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.routeName">route_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec">GoogleCloudRunDomainMappingSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_mode_input`<sup>Optional</sup> <a name="certificate_mode_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.certificateModeInput"></a>

```python
certificate_mode_input: str
```

- *Type:* str

---

##### `force_override_input`<sup>Optional</sup> <a name="force_override_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.forceOverrideInput"></a>

```python
force_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_name_input`<sup>Optional</sup> <a name="route_name_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.routeNameInput"></a>

```python
route_name_input: str
```

- *Type:* str

---

##### `certificate_mode`<sup>Required</sup> <a name="certificate_mode" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.certificateMode"></a>

```python
certificate_mode: str
```

- *Type:* str

---

##### `force_override`<sup>Required</sup> <a name="force_override" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.forceOverride"></a>

```python
force_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_name`<sup>Required</sup> <a name="route_name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.routeName"></a>

```python
route_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunDomainMappingSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingSpec">GoogleCloudRunDomainMappingSpec</a>

---


### GoogleCloudRunDomainMappingStatusConditionsList <a name="GoogleCloudRunDomainMappingStatusConditionsList" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunDomainMappingStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudRunDomainMappingStatusConditionsOutputReference <a name="GoogleCloudRunDomainMappingStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditions">GoogleCloudRunDomainMappingStatusConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunDomainMappingStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditions">GoogleCloudRunDomainMappingStatusConditions</a>

---


### GoogleCloudRunDomainMappingStatusList <a name="GoogleCloudRunDomainMappingStatusList" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunDomainMappingStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudRunDomainMappingStatusOutputReference <a name="GoogleCloudRunDomainMappingStatusOutputReference" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList">GoogleCloudRunDomainMappingStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.mappedRouteName">mapped_route_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.observedGeneration">observed_generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.resourceRecords">resource_records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList">GoogleCloudRunDomainMappingStatusResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatus">GoogleCloudRunDomainMappingStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.conditions"></a>

```python
conditions: GoogleCloudRunDomainMappingStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusConditionsList">GoogleCloudRunDomainMappingStatusConditionsList</a>

---

##### `mapped_route_name`<sup>Required</sup> <a name="mapped_route_name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.mappedRouteName"></a>

```python
mapped_route_name: str
```

- *Type:* str

---

##### `observed_generation`<sup>Required</sup> <a name="observed_generation" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.observedGeneration"></a>

```python
observed_generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_records`<sup>Required</sup> <a name="resource_records" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.resourceRecords"></a>

```python
resource_records: GoogleCloudRunDomainMappingStatusResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList">GoogleCloudRunDomainMappingStatusResourceRecordsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunDomainMappingStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatus">GoogleCloudRunDomainMappingStatus</a>

---


### GoogleCloudRunDomainMappingStatusResourceRecordsList <a name="GoogleCloudRunDomainMappingStatusResourceRecordsList" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference <a name="GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.rrdata">rrdata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecords">GoogleCloudRunDomainMappingStatusResourceRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rrdata`<sup>Required</sup> <a name="rrdata" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.rrdata"></a>

```python
rrdata: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecordsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunDomainMappingStatusResourceRecords
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingStatusResourceRecords">GoogleCloudRunDomainMappingStatusResourceRecords</a>

---


### GoogleCloudRunDomainMappingTimeoutsOutputReference <a name="GoogleCloudRunDomainMappingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_run_domain_mapping

googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts">GoogleCloudRunDomainMappingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudRunDomainMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudRunDomainMapping.GoogleCloudRunDomainMappingTimeouts">GoogleCloudRunDomainMappingTimeouts</a>]

---



