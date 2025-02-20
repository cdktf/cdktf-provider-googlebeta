# `googleAppEngineDomainMapping` Submodule <a name="`googleAppEngineDomainMapping` Submodule" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineDomainMapping <a name="GoogleAppEngineDomainMapping" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping google_app_engine_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMapping(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  id: str = None,
  override_strategy: str = None,
  project: str = None,
  ssl_settings: GoogleAppEngineDomainMappingSslSettings = None,
  timeouts: GoogleAppEngineDomainMappingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Relative name of the domain serving the application. Example: example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#id GoogleAppEngineDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.overrideStrategy">override_strategy</a></code> | <code>str</code> | Whether the domain creation should override any existing mappings for this domain. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#project GoogleAppEngineDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.sslSettings">ssl_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | ssl_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.domainName"></a>

- *Type:* str

Relative name of the domain serving the application. Example: example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#domain_name GoogleAppEngineDomainMapping#domain_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#id GoogleAppEngineDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override_strategy`<sup>Optional</sup> <a name="override_strategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.overrideStrategy"></a>

- *Type:* str

Whether the domain creation should override any existing mappings for this domain.

By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#override_strategy GoogleAppEngineDomainMapping#override_strategy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#project GoogleAppEngineDomainMapping#project}.

---

##### `ssl_settings`<sup>Optional</sup> <a name="ssl_settings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.sslSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

ssl_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#ssl_settings GoogleAppEngineDomainMapping#ssl_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#timeouts GoogleAppEngineDomainMapping#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings">put_ssl_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideStrategy">reset_override_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetSslSettings">reset_ssl_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ssl_settings` <a name="put_ssl_settings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings"></a>

```python
def put_ssl_settings(
  ssl_management_type: str,
  certificate_id: str = None
) -> None
```

###### `ssl_management_type`<sup>Required</sup> <a name="ssl_management_type" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings.parameter.sslManagementType"></a>

- *Type:* str

SSL management type for this domain.

If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#ssl_management_type GoogleAppEngineDomainMapping#ssl_management_type}

---

###### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings.parameter.certificateId"></a>

- *Type:* str

ID of the AuthorizedCertificate resource configuring SSL for the application.

Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#certificate_id GoogleAppEngineDomainMapping#certificate_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#create GoogleAppEngineDomainMapping#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#delete GoogleAppEngineDomainMapping#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#update GoogleAppEngineDomainMapping#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_override_strategy` <a name="reset_override_strategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideStrategy"></a>

```python
def reset_override_strategy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_ssl_settings` <a name="reset_ssl_settings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetSslSettings"></a>

```python
def reset_ssl_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleAppEngineDomainMapping resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleAppEngineDomainMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAppEngineDomainMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAppEngineDomainMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineDomainMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.resourceRecords">resource_records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList">GoogleAppEngineDomainMappingResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettings">ssl_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference">GoogleAppEngineDomainMappingSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference">GoogleAppEngineDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategyInput">override_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettingsInput">ssl_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategy">override_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_records`<sup>Required</sup> <a name="resource_records" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.resourceRecords"></a>

```python
resource_records: GoogleAppEngineDomainMappingResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList">GoogleAppEngineDomainMappingResourceRecordsList</a>

---

##### `ssl_settings`<sup>Required</sup> <a name="ssl_settings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettings"></a>

```python
ssl_settings: GoogleAppEngineDomainMappingSslSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference">GoogleAppEngineDomainMappingSslSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeouts"></a>

```python
timeouts: GoogleAppEngineDomainMappingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference">GoogleAppEngineDomainMappingTimeoutsOutputReference</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `override_strategy_input`<sup>Optional</sup> <a name="override_strategy_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategyInput"></a>

```python
override_strategy_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `ssl_settings_input`<sup>Optional</sup> <a name="ssl_settings_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettingsInput"></a>

```python
ssl_settings_input: GoogleAppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleAppEngineDomainMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `override_strategy`<sup>Required</sup> <a name="override_strategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategy"></a>

```python
override_strategy: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineDomainMappingConfig <a name="GoogleAppEngineDomainMappingConfig" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  id: str = None,
  override_strategy: str = None,
  project: str = None,
  ssl_settings: GoogleAppEngineDomainMappingSslSettings = None,
  timeouts: GoogleAppEngineDomainMappingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.domainName">domain_name</a></code> | <code>str</code> | Relative name of the domain serving the application. Example: example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#id GoogleAppEngineDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.overrideStrategy">override_strategy</a></code> | <code>str</code> | Whether the domain creation should override any existing mappings for this domain. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#project GoogleAppEngineDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.sslSettings">ssl_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | ssl_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Relative name of the domain serving the application. Example: example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#domain_name GoogleAppEngineDomainMapping#domain_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#id GoogleAppEngineDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override_strategy`<sup>Optional</sup> <a name="override_strategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.overrideStrategy"></a>

```python
override_strategy: str
```

- *Type:* str

Whether the domain creation should override any existing mappings for this domain.

By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#override_strategy GoogleAppEngineDomainMapping#override_strategy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#project GoogleAppEngineDomainMapping#project}.

---

##### `ssl_settings`<sup>Optional</sup> <a name="ssl_settings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.sslSettings"></a>

```python
ssl_settings: GoogleAppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

ssl_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#ssl_settings GoogleAppEngineDomainMapping#ssl_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.timeouts"></a>

```python
timeouts: GoogleAppEngineDomainMappingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#timeouts GoogleAppEngineDomainMapping#timeouts}

---

### GoogleAppEngineDomainMappingResourceRecords <a name="GoogleAppEngineDomainMappingResourceRecords" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords()
```


### GoogleAppEngineDomainMappingSslSettings <a name="GoogleAppEngineDomainMappingSslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings(
  ssl_management_type: str,
  certificate_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.sslManagementType">ssl_management_type</a></code> | <code>str</code> | SSL management type for this domain. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.certificateId">certificate_id</a></code> | <code>str</code> | ID of the AuthorizedCertificate resource configuring SSL for the application. |

---

##### `ssl_management_type`<sup>Required</sup> <a name="ssl_management_type" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.sslManagementType"></a>

```python
ssl_management_type: str
```

- *Type:* str

SSL management type for this domain.

If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#ssl_management_type GoogleAppEngineDomainMapping#ssl_management_type}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

ID of the AuthorizedCertificate resource configuring SSL for the application.

Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#certificate_id GoogleAppEngineDomainMapping#certificate_id}

---

### GoogleAppEngineDomainMappingTimeouts <a name="GoogleAppEngineDomainMappingTimeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#create GoogleAppEngineDomainMapping#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#delete GoogleAppEngineDomainMapping#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#update GoogleAppEngineDomainMapping#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#create GoogleAppEngineDomainMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#delete GoogleAppEngineDomainMapping#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#update GoogleAppEngineDomainMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineDomainMappingResourceRecordsList <a name="GoogleAppEngineDomainMappingResourceRecordsList" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAppEngineDomainMappingResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleAppEngineDomainMappingResourceRecordsOutputReference <a name="GoogleAppEngineDomainMappingResourceRecordsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.rrdata">rrdata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords">GoogleAppEngineDomainMappingResourceRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rrdata`<sup>Required</sup> <a name="rrdata" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.rrdata"></a>

```python
rrdata: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineDomainMappingResourceRecords
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords">GoogleAppEngineDomainMappingResourceRecords</a>

---


### GoogleAppEngineDomainMappingSslSettingsOutputReference <a name="GoogleAppEngineDomainMappingSslSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resetCertificateId">reset_certificate_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_id` <a name="reset_certificate_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId">pending_managed_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput">ssl_management_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType">ssl_management_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pending_managed_certificate_id`<sup>Required</sup> <a name="pending_managed_certificate_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId"></a>

```python
pending_managed_certificate_id: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `ssl_management_type_input`<sup>Optional</sup> <a name="ssl_management_type_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput"></a>

```python
ssl_management_type_input: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `ssl_management_type`<sup>Required</sup> <a name="ssl_management_type" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType"></a>

```python
ssl_management_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

---


### GoogleAppEngineDomainMappingTimeoutsOutputReference <a name="GoogleAppEngineDomainMappingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_domain_mapping

googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAppEngineDomainMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>]

---



