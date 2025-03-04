# `googleAppEngineServiceSplitTraffic` Submodule <a name="`googleAppEngineServiceSplitTraffic` Submodule" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineServiceSplitTraffic <a name="GoogleAppEngineServiceSplitTraffic" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic google_app_engine_service_split_traffic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  split: GoogleAppEngineServiceSplitTrafficSplit,
  id: str = None,
  migrate_traffic: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: GoogleAppEngineServiceSplitTrafficTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.service">service</a></code> | <code>str</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.split">split</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#id GoogleAppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.migrateTraffic">migrate_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#project GoogleAppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.service"></a>

- *Type:* str

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#service GoogleAppEngineServiceSplitTraffic#service}

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.split"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#split GoogleAppEngineServiceSplitTraffic#split}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#id GoogleAppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrate_traffic`<sup>Optional</sup> <a name="migrate_traffic" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.migrateTraffic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#migrate_traffic GoogleAppEngineServiceSplitTraffic#migrate_traffic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#project GoogleAppEngineServiceSplitTraffic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#timeouts GoogleAppEngineServiceSplitTraffic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putSplit">put_split</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetMigrateTraffic">reset_migrate_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_split` <a name="put_split" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putSplit"></a>

```python
def put_split(
  allocations: typing.Mapping[str],
  shard_by: str = None
) -> None
```

###### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putSplit.parameter.allocations"></a>

- *Type:* typing.Mapping[str]

Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#allocations GoogleAppEngineServiceSplitTraffic#allocations}

---

###### `shard_by`<sup>Optional</sup> <a name="shard_by" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putSplit.parameter.shardBy"></a>

- *Type:* str

Mechanism used to determine which version a request is sent to.

The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#shard_by GoogleAppEngineServiceSplitTraffic#shard_by}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#create GoogleAppEngineServiceSplitTraffic#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#delete GoogleAppEngineServiceSplitTraffic#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#update GoogleAppEngineServiceSplitTraffic#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_migrate_traffic` <a name="reset_migrate_traffic" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetMigrateTraffic"></a>

```python
def reset_migrate_traffic() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleAppEngineServiceSplitTraffic resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleAppEngineServiceSplitTraffic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAppEngineServiceSplitTraffic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAppEngineServiceSplitTraffic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineServiceSplitTraffic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.split">split</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference">GoogleAppEngineServiceSplitTrafficSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference">GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.migrateTrafficInput">migrate_traffic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.splitInput">split_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.migrateTraffic">migrate_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.split"></a>

```python
split: GoogleAppEngineServiceSplitTrafficSplitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference">GoogleAppEngineServiceSplitTrafficSplitOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.timeouts"></a>

```python
timeouts: GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference">GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `migrate_traffic_input`<sup>Optional</sup> <a name="migrate_traffic_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.migrateTrafficInput"></a>

```python
migrate_traffic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `split_input`<sup>Optional</sup> <a name="split_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.splitInput"></a>

```python
split_input: GoogleAppEngineServiceSplitTrafficSplit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleAppEngineServiceSplitTrafficTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migrate_traffic`<sup>Required</sup> <a name="migrate_traffic" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.migrateTraffic"></a>

```python
migrate_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineServiceSplitTrafficConfig <a name="GoogleAppEngineServiceSplitTrafficConfig" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  split: GoogleAppEngineServiceSplitTrafficSplit,
  id: str = None,
  migrate_traffic: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: GoogleAppEngineServiceSplitTrafficTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.service">service</a></code> | <code>str</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.split">split</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#id GoogleAppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.migrateTraffic">migrate_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#project GoogleAppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#service GoogleAppEngineServiceSplitTraffic#service}

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.split"></a>

```python
split: GoogleAppEngineServiceSplitTrafficSplit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#split GoogleAppEngineServiceSplitTraffic#split}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#id GoogleAppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrate_traffic`<sup>Optional</sup> <a name="migrate_traffic" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.migrateTraffic"></a>

```python
migrate_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#migrate_traffic GoogleAppEngineServiceSplitTraffic#migrate_traffic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#project GoogleAppEngineServiceSplitTraffic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.timeouts"></a>

```python
timeouts: GoogleAppEngineServiceSplitTrafficTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#timeouts GoogleAppEngineServiceSplitTraffic#timeouts}

---

### GoogleAppEngineServiceSplitTrafficSplit <a name="GoogleAppEngineServiceSplitTrafficSplit" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit(
  allocations: typing.Mapping[str],
  shard_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.property.allocations">allocations</a></code> | <code>typing.Mapping[str]</code> | Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.property.shardBy">shard_by</a></code> | <code>str</code> | Mechanism used to determine which version a request is sent to. |

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.property.allocations"></a>

```python
allocations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#allocations GoogleAppEngineServiceSplitTraffic#allocations}

---

##### `shard_by`<sup>Optional</sup> <a name="shard_by" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.property.shardBy"></a>

```python
shard_by: str
```

- *Type:* str

Mechanism used to determine which version a request is sent to.

The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#shard_by GoogleAppEngineServiceSplitTraffic#shard_by}

---

### GoogleAppEngineServiceSplitTrafficTimeouts <a name="GoogleAppEngineServiceSplitTrafficTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#create GoogleAppEngineServiceSplitTraffic#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#delete GoogleAppEngineServiceSplitTraffic#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#update GoogleAppEngineServiceSplitTraffic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#create GoogleAppEngineServiceSplitTraffic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#delete GoogleAppEngineServiceSplitTraffic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#update GoogleAppEngineServiceSplitTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineServiceSplitTrafficSplitOutputReference <a name="GoogleAppEngineServiceSplitTrafficSplitOutputReference" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resetShardBy">reset_shard_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_shard_by` <a name="reset_shard_by" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resetShardBy"></a>

```python
def reset_shard_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput">allocations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput">shard_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.allocations">allocations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.shardBy">shard_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocations_input`<sup>Optional</sup> <a name="allocations_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput"></a>

```python
allocations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shard_by_input`<sup>Optional</sup> <a name="shard_by_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput"></a>

```python
shard_by_input: str
```

- *Type:* str

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.allocations"></a>

```python
allocations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shard_by`<sup>Required</sup> <a name="shard_by" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.shardBy"></a>

```python
shard_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineServiceSplitTrafficSplit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a>

---


### GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference <a name="GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_service_split_traffic

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAppEngineServiceSplitTrafficTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>]

---



