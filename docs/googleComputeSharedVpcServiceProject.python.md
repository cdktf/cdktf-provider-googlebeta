# `google_compute_shared_vpc_service_project`

Refer to the Terraform Registory for docs: [`google_compute_shared_vpc_service_project`](https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project).

# `googleComputeSharedVpcServiceProject` Submodule <a name="`googleComputeSharedVpcServiceProject` Submodule" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSharedVpcServiceProject <a name="GoogleComputeSharedVpcServiceProject" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project google_compute_shared_vpc_service_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_shared_vpc_service_project

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_project: str,
  service_project: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleComputeSharedVpcServiceProjectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.hostProject">host_project</a></code> | <code>str</code> | The ID of a host project to associate. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.serviceProject">service_project</a></code> | <code>str</code> | The ID of the project that will serve as a Shared VPC service project. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the shared VPC service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#id GoogleComputeSharedVpcServiceProject#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_project`<sup>Required</sup> <a name="host_project" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.hostProject"></a>

- *Type:* str

The ID of a host project to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#host_project GoogleComputeSharedVpcServiceProject#host_project}

---

##### `service_project`<sup>Required</sup> <a name="service_project" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.serviceProject"></a>

- *Type:* str

The ID of the project that will serve as a Shared VPC service project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#service_project GoogleComputeSharedVpcServiceProject#service_project}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

The deletion policy for the shared VPC service.

Setting ABANDON allows the resource
to be abandoned rather than deleted. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#deletion_policy GoogleComputeSharedVpcServiceProject#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#id GoogleComputeSharedVpcServiceProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#timeouts GoogleComputeSharedVpcServiceProject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#create GoogleComputeSharedVpcServiceProject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#delete GoogleComputeSharedVpcServiceProject#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_shared_vpc_service_project

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_shared_vpc_service_project

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_shared_vpc_service_project

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference">GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.hostProjectInput">host_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.serviceProjectInput">service_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.hostProject">host_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.serviceProject">service_project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.timeouts"></a>

```python
timeouts: GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference">GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `host_project_input`<sup>Optional</sup> <a name="host_project_input" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.hostProjectInput"></a>

```python
host_project_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_project_input`<sup>Optional</sup> <a name="service_project_input" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.serviceProjectInput"></a>

```python
service_project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleComputeSharedVpcServiceProjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>, cdktf.IResolvable]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `host_project`<sup>Required</sup> <a name="host_project" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.hostProject"></a>

```python
host_project: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_project`<sup>Required</sup> <a name="service_project" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.serviceProject"></a>

```python
service_project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSharedVpcServiceProjectConfig <a name="GoogleComputeSharedVpcServiceProjectConfig" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_shared_vpc_service_project

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_project: str,
  service_project: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleComputeSharedVpcServiceProjectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.hostProject">host_project</a></code> | <code>str</code> | The ID of a host project to associate. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.serviceProject">service_project</a></code> | <code>str</code> | The ID of the project that will serve as a Shared VPC service project. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the shared VPC service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#id GoogleComputeSharedVpcServiceProject#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_project`<sup>Required</sup> <a name="host_project" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.hostProject"></a>

```python
host_project: str
```

- *Type:* str

The ID of a host project to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#host_project GoogleComputeSharedVpcServiceProject#host_project}

---

##### `service_project`<sup>Required</sup> <a name="service_project" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.serviceProject"></a>

```python
service_project: str
```

- *Type:* str

The ID of the project that will serve as a Shared VPC service project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#service_project GoogleComputeSharedVpcServiceProject#service_project}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

The deletion policy for the shared VPC service.

Setting ABANDON allows the resource
to be abandoned rather than deleted. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#deletion_policy GoogleComputeSharedVpcServiceProject#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#id GoogleComputeSharedVpcServiceProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeSharedVpcServiceProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#timeouts GoogleComputeSharedVpcServiceProject#timeouts}

---

### GoogleComputeSharedVpcServiceProjectTimeouts <a name="GoogleComputeSharedVpcServiceProjectTimeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_shared_vpc_service_project

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#create GoogleComputeSharedVpcServiceProject#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#delete GoogleComputeSharedVpcServiceProject#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#create GoogleComputeSharedVpcServiceProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_shared_vpc_service_project#delete GoogleComputeSharedVpcServiceProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference <a name="GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_shared_vpc_service_project

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleComputeSharedVpcServiceProjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>, cdktf.IResolvable]

---



