# `googleServiceDirectoryService` Submodule <a name="`googleServiceDirectoryService` Submodule" id="@cdktf/provider-google-beta.googleServiceDirectoryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceDirectoryService <a name="GoogleServiceDirectoryService" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service google_service_directory_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_service

googleServiceDirectoryService.GoogleServiceDirectoryService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  service_id: str,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: GoogleServiceDirectoryServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The resource name of the namespace this service will belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#id GoogleServiceDirectoryService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata for the service. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts">GoogleServiceDirectoryServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.namespace"></a>

- *Type:* str

The resource name of the namespace this service will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#namespace GoogleServiceDirectoryService#namespace}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.serviceId"></a>

- *Type:* str

The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#service_id GoogleServiceDirectoryService#service_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#id GoogleServiceDirectoryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata for the service.

This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 2000 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#metadata GoogleServiceDirectoryService#metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts">GoogleServiceDirectoryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#timeouts GoogleServiceDirectoryService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#create GoogleServiceDirectoryService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#delete GoogleServiceDirectoryService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#update GoogleServiceDirectoryService#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleServiceDirectoryService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_service

googleServiceDirectoryService.GoogleServiceDirectoryService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_service

googleServiceDirectoryService.GoogleServiceDirectoryService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_service

googleServiceDirectoryService.GoogleServiceDirectoryService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_service

googleServiceDirectoryService.GoogleServiceDirectoryService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleServiceDirectoryService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleServiceDirectoryService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleServiceDirectoryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceDirectoryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference">GoogleServiceDirectoryServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts">GoogleServiceDirectoryServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.timeouts"></a>

```python
timeouts: GoogleServiceDirectoryServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference">GoogleServiceDirectoryServiceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleServiceDirectoryServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts">GoogleServiceDirectoryServiceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceDirectoryServiceConfig <a name="GoogleServiceDirectoryServiceConfig" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_service

googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  service_id: str,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: GoogleServiceDirectoryServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.namespace">namespace</a></code> | <code>str</code> | The resource name of the namespace this service will belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.serviceId">service_id</a></code> | <code>str</code> | The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#id GoogleServiceDirectoryService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata for the service. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts">GoogleServiceDirectoryServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The resource name of the namespace this service will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#namespace GoogleServiceDirectoryService#namespace}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#service_id GoogleServiceDirectoryService#service_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#id GoogleServiceDirectoryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata for the service.

This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 2000 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#metadata GoogleServiceDirectoryService#metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceConfig.property.timeouts"></a>

```python
timeouts: GoogleServiceDirectoryServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts">GoogleServiceDirectoryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#timeouts GoogleServiceDirectoryService#timeouts}

---

### GoogleServiceDirectoryServiceTimeouts <a name="GoogleServiceDirectoryServiceTimeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_service

googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#create GoogleServiceDirectoryService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#delete GoogleServiceDirectoryService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#update GoogleServiceDirectoryService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#create GoogleServiceDirectoryService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#delete GoogleServiceDirectoryService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_directory_service#update GoogleServiceDirectoryService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceDirectoryServiceTimeoutsOutputReference <a name="GoogleServiceDirectoryServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_service

googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts">GoogleServiceDirectoryServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleServiceDirectoryServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceDirectoryService.GoogleServiceDirectoryServiceTimeouts">GoogleServiceDirectoryServiceTimeouts</a>]

---



