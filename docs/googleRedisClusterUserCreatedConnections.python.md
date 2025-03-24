# `googleRedisClusterUserCreatedConnections` Submodule <a name="`googleRedisClusterUserCreatedConnections` Submodule" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRedisClusterUserCreatedConnections <a name="GoogleRedisClusterUserCreatedConnections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections google_redis_cluster_user_created_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  cluster_endpoints: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpoints]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleRedisClusterUserCreatedConnectionsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.region">region</a></code> | <code>str</code> | The name of the region of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.clusterEndpoints">cluster_endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]]</code> | cluster_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.name"></a>

- *Type:* str

The name of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#name GoogleRedisClusterUserCreatedConnections#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.region"></a>

- *Type:* str

The name of the region of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#region GoogleRedisClusterUserCreatedConnections#region}

---

##### `cluster_endpoints`<sup>Optional</sup> <a name="cluster_endpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.clusterEndpoints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]]

cluster_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#cluster_endpoints GoogleRedisClusterUserCreatedConnections#cluster_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#timeouts GoogleRedisClusterUserCreatedConnections#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putClusterEndpoints">put_cluster_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetClusterEndpoints">reset_cluster_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cluster_endpoints` <a name="put_cluster_endpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putClusterEndpoints"></a>

```python
def put_cluster_endpoints(
  value: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpoints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putClusterEndpoints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#create GoogleRedisClusterUserCreatedConnections#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#delete GoogleRedisClusterUserCreatedConnections#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#update GoogleRedisClusterUserCreatedConnections#update}.

---

##### `reset_cluster_endpoints` <a name="reset_cluster_endpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetClusterEndpoints"></a>

```python
def reset_cluster_endpoints() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleRedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleRedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleRedisClusterUserCreatedConnections to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleRedisClusterUserCreatedConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRedisClusterUserCreatedConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpoints">cluster_endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference">GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpointsInput">cluster_endpoints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_endpoints`<sup>Required</sup> <a name="cluster_endpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpoints"></a>

```python
cluster_endpoints: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeouts"></a>

```python
timeouts: GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference">GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference</a>

---

##### `cluster_endpoints_input`<sup>Optional</sup> <a name="cluster_endpoints_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpointsInput"></a>

```python
cluster_endpoints_input: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleRedisClusterUserCreatedConnectionsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRedisClusterUserCreatedConnectionsClusterEndpoints <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints(
  connections: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.property.connections">connections</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>]]</code> | connections block. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.property.connections"></a>

```python
connections: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>]]

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#connections GoogleRedisClusterUserCreatedConnections#connections}

---

### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections(
  psc_connection: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection">psc_connection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `psc_connection`<sup>Optional</sup> <a name="psc_connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection"></a>

```python
psc_connection: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#psc_connection GoogleRedisClusterUserCreatedConnections#psc_connection}

---

### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection(
  address: str,
  forwarding_rule: str,
  network: str,
  psc_connection_id: str,
  service_attachment: str,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address">address</a></code> | <code>str</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network">network</a></code> | <code>str</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId">project_id</a></code> | <code>str</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address"></a>

```python
address: str
```

- *Type:* str

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#address GoogleRedisClusterUserCreatedConnections#address}

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#forwarding_rule GoogleRedisClusterUserCreatedConnections#forwarding_rule}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network"></a>

```python
network: str
```

- *Type:* str

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#network GoogleRedisClusterUserCreatedConnections#network}

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#psc_connection_id GoogleRedisClusterUserCreatedConnections#psc_connection_id}

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#service_attachment GoogleRedisClusterUserCreatedConnections#service_attachment}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#project_id GoogleRedisClusterUserCreatedConnections#project_id}

---

### GoogleRedisClusterUserCreatedConnectionsConfig <a name="GoogleRedisClusterUserCreatedConnectionsConfig" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  cluster_endpoints: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpoints]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleRedisClusterUserCreatedConnectionsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.name">name</a></code> | <code>str</code> | The name of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.region">region</a></code> | <code>str</code> | The name of the region of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints">cluster_endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]]</code> | cluster_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#name GoogleRedisClusterUserCreatedConnections#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The name of the region of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#region GoogleRedisClusterUserCreatedConnections#region}

---

##### `cluster_endpoints`<sup>Optional</sup> <a name="cluster_endpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints"></a>

```python
cluster_endpoints: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]]

cluster_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#cluster_endpoints GoogleRedisClusterUserCreatedConnections#cluster_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.timeouts"></a>

```python
timeouts: GoogleRedisClusterUserCreatedConnectionsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#timeouts GoogleRedisClusterUserCreatedConnections#timeouts}

---

### GoogleRedisClusterUserCreatedConnectionsTimeouts <a name="GoogleRedisClusterUserCreatedConnectionsTimeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#create GoogleRedisClusterUserCreatedConnections#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#delete GoogleRedisClusterUserCreatedConnections#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#update GoogleRedisClusterUserCreatedConnections#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#create GoogleRedisClusterUserCreatedConnections#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#delete GoogleRedisClusterUserCreatedConnections#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#update GoogleRedisClusterUserCreatedConnections#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>]]

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection">put_psc_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection">reset_psc_connection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_psc_connection` <a name="put_psc_connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection"></a>

```python
def put_psc_connection(
  address: str,
  forwarding_rule: str,
  network: str,
  psc_connection_id: str,
  service_attachment: str,
  project_id: str = None
) -> None
```

###### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.address"></a>

- *Type:* str

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#address GoogleRedisClusterUserCreatedConnections#address}

---

###### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.forwardingRule"></a>

- *Type:* str

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#forwarding_rule GoogleRedisClusterUserCreatedConnections#forwarding_rule}

---

###### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.network"></a>

- *Type:* str

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#network GoogleRedisClusterUserCreatedConnections#network}

---

###### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.pscConnectionId"></a>

- *Type:* str

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#psc_connection_id GoogleRedisClusterUserCreatedConnections#psc_connection_id}

---

###### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.serviceAttachment"></a>

- *Type:* str

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#service_attachment GoogleRedisClusterUserCreatedConnections#service_attachment}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.projectId"></a>

- *Type:* str

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_redis_cluster_user_created_connections#project_id GoogleRedisClusterUserCreatedConnections#project_id}

---

##### `reset_psc_connection` <a name="reset_psc_connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection"></a>

```python
def reset_psc_connection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection">psc_connection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput">psc_connection_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `psc_connection`<sup>Required</sup> <a name="psc_connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection"></a>

```python
psc_connection: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `psc_connection_input`<sup>Optional</sup> <a name="psc_connection_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```python
psc_connection_input: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>]

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">psc_connection_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">forwarding_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">psc_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">service_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `psc_connection_status`<sup>Required</sup> <a name="psc_connection_status" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```python
psc_connection_status: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `forwarding_rule_input`<sup>Optional</sup> <a name="forwarding_rule_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```python
forwarding_rule_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `psc_connection_id_input`<sup>Optional</sup> <a name="psc_connection_id_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```python
psc_connection_id_input: str
```

- *Type:* str

---

##### `service_attachment_input`<sup>Optional</sup> <a name="service_attachment_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```python
service_attachment_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]]

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections">put_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections">reset_connections</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connections` <a name="put_connections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections"></a>

```python
def put_connections(
  value: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>]]

---

##### `reset_connections` <a name="reset_connections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections"></a>

```python
def reset_connections() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput">connections_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections"></a>

```python
connections: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a>

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput"></a>

```python
connections_input: typing.Union[IResolvable, typing.List[GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleRedisClusterUserCreatedConnectionsClusterEndpoints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>]

---


### GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster_user_created_connections

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleRedisClusterUserCreatedConnectionsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>]

---



