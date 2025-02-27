# `googleIdentityPlatformInboundSamlConfig` Submodule <a name="`googleIdentityPlatformInboundSamlConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformInboundSamlConfig <a name="GoogleIdentityPlatformInboundSamlConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config google_identity_platform_inbound_saml_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  idp_config: GoogleIdentityPlatformInboundSamlConfigIdpConfig,
  name: str,
  sp_config: GoogleIdentityPlatformInboundSamlConfigSpConfig,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformInboundSamlConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#id GoogleIdentityPlatformInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#project GoogleIdentityPlatformInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.displayName"></a>

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#display_name GoogleIdentityPlatformInboundSamlConfig#display_name}

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#idp_config GoogleIdentityPlatformInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.name"></a>

- *Type:* str

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#name GoogleIdentityPlatformInboundSamlConfig#name}

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.spConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#sp_config GoogleIdentityPlatformInboundSamlConfig#sp_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#enabled GoogleIdentityPlatformInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#id GoogleIdentityPlatformInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#project GoogleIdentityPlatformInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#timeouts GoogleIdentityPlatformInboundSamlConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putIdpConfig">put_idp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putSpConfig">put_sp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_idp_config` <a name="put_idp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putIdpConfig"></a>

```python
def put_idp_config(
  idp_certificates: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]],
  idp_entity_id: str,
  sso_url: str,
  sign_request: typing.Union[bool, IResolvable] = None
) -> None
```

###### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putIdpConfig.parameter.idpCertificates"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#idp_certificates GoogleIdentityPlatformInboundSamlConfig#idp_certificates}

---

###### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putIdpConfig.parameter.idpEntityId"></a>

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#idp_entity_id GoogleIdentityPlatformInboundSamlConfig#idp_entity_id}

---

###### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putIdpConfig.parameter.ssoUrl"></a>

- *Type:* str

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#sso_url GoogleIdentityPlatformInboundSamlConfig#sso_url}

---

###### `sign_request`<sup>Optional</sup> <a name="sign_request" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putIdpConfig.parameter.signRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#sign_request GoogleIdentityPlatformInboundSamlConfig#sign_request}

---

##### `put_sp_config` <a name="put_sp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putSpConfig"></a>

```python
def put_sp_config(
  callback_uri: str = None,
  sp_entity_id: str = None
) -> None
```

###### `callback_uri`<sup>Optional</sup> <a name="callback_uri" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putSpConfig.parameter.callbackUri"></a>

- *Type:* str

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#callback_uri GoogleIdentityPlatformInboundSamlConfig#callback_uri}

---

###### `sp_entity_id`<sup>Optional</sup> <a name="sp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putSpConfig.parameter.spEntityId"></a>

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#sp_entity_id GoogleIdentityPlatformInboundSamlConfig#sp_entity_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#create GoogleIdentityPlatformInboundSamlConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#delete GoogleIdentityPlatformInboundSamlConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#update GoogleIdentityPlatformInboundSamlConfig#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformInboundSamlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIdentityPlatformInboundSamlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIdentityPlatformInboundSamlConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIdentityPlatformInboundSamlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformInboundSamlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference">GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference">GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference">GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idpConfigInput">idp_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.spConfigInput">sp_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idpConfig"></a>

```python
idp_config: GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference">GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference</a>

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.spConfig"></a>

```python
sp_config: GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference">GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference">GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_config_input`<sup>Optional</sup> <a name="idp_config_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idpConfigInput"></a>

```python
idp_config_input: GoogleIdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sp_config_input`<sup>Optional</sup> <a name="sp_config_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.spConfigInput"></a>

```python
sp_config_input: GoogleIdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIdentityPlatformInboundSamlConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformInboundSamlConfigConfig <a name="GoogleIdentityPlatformInboundSamlConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  idp_config: GoogleIdentityPlatformInboundSamlConfigIdpConfig,
  name: str,
  sp_config: GoogleIdentityPlatformInboundSamlConfigSpConfig,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformInboundSamlConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.name">name</a></code> | <code>str</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#id GoogleIdentityPlatformInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#project GoogleIdentityPlatformInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#display_name GoogleIdentityPlatformInboundSamlConfig#display_name}

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.idpConfig"></a>

```python
idp_config: GoogleIdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#idp_config GoogleIdentityPlatformInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#name GoogleIdentityPlatformInboundSamlConfig#name}

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.spConfig"></a>

```python
sp_config: GoogleIdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#sp_config GoogleIdentityPlatformInboundSamlConfig#sp_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#enabled GoogleIdentityPlatformInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#id GoogleIdentityPlatformInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#project GoogleIdentityPlatformInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformInboundSamlConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#timeouts GoogleIdentityPlatformInboundSamlConfig#timeouts}

---

### GoogleIdentityPlatformInboundSamlConfigIdpConfig <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig(
  idp_certificates: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]],
  idp_entity_id: str,
  sso_url: str,
  sign_request: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates">idp_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | idp_certificates block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | Unique identifier for all SAML entities. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl">sso_url</a></code> | <code>str</code> | URL to send Authentication request to. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if outbounding SAMLRequest should be signed. |

---

##### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates"></a>

```python
idp_certificates: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#idp_certificates GoogleIdentityPlatformInboundSamlConfig#idp_certificates}

---

##### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#idp_entity_id GoogleIdentityPlatformInboundSamlConfig#idp_entity_id}

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#sso_url GoogleIdentityPlatformInboundSamlConfig#sso_url}

---

##### `sign_request`<sup>Optional</sup> <a name="sign_request" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#sign_request GoogleIdentityPlatformInboundSamlConfig#sign_request}

---

### GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates(
  x509_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | The IdP's x509 certificate. |

---

##### `x509_certificate`<sup>Optional</sup> <a name="x509_certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

The IdP's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#x509_certificate GoogleIdentityPlatformInboundSamlConfig#x509_certificate}

---

### GoogleIdentityPlatformInboundSamlConfigSpConfig <a name="GoogleIdentityPlatformInboundSamlConfigSpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig(
  callback_uri: str = None,
  sp_entity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.property.callbackUri">callback_uri</a></code> | <code>str</code> | Callback URI where responses from IDP are handled. Must start with 'https://'. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | Unique identifier for all SAML entities. |

---

##### `callback_uri`<sup>Optional</sup> <a name="callback_uri" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.property.callbackUri"></a>

```python
callback_uri: str
```

- *Type:* str

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#callback_uri GoogleIdentityPlatformInboundSamlConfig#callback_uri}

---

##### `sp_entity_id`<sup>Optional</sup> <a name="sp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#sp_entity_id GoogleIdentityPlatformInboundSamlConfig#sp_entity_id}

---

### GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates <a name="GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates()
```


### GoogleIdentityPlatformInboundSamlConfigTimeouts <a name="GoogleIdentityPlatformInboundSamlConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#create GoogleIdentityPlatformInboundSamlConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#delete GoogleIdentityPlatformInboundSamlConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#update GoogleIdentityPlatformInboundSamlConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#create GoogleIdentityPlatformInboundSamlConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#delete GoogleIdentityPlatformInboundSamlConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_inbound_saml_config#update GoogleIdentityPlatformInboundSamlConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

---


### GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate">reset_x509_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x509_certificate` <a name="reset_x509_certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate"></a>

```python
def reset_x509_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput">x509_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x509_certificate_input`<sup>Optional</sup> <a name="x509_certificate_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput"></a>

```python
x509_certificate_input: str
```

- *Type:* str

---

##### `x509_certificate`<sup>Required</sup> <a name="x509_certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]

---


### GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates">put_idp_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest">reset_sign_request</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idp_certificates` <a name="put_idp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates"></a>

```python
def put_idp_certificates(
  value: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

---

##### `reset_sign_request` <a name="reset_sign_request" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest"></a>

```python
def reset_sign_request() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates">idp_certificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput">idp_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput">idp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput">sign_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput">sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates"></a>

```python
idp_certificates: GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a>

---

##### `idp_certificates_input`<sup>Optional</sup> <a name="idp_certificates_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput"></a>

```python
idp_certificates_input: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>]]

---

##### `idp_entity_id_input`<sup>Optional</sup> <a name="idp_entity_id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput"></a>

```python
idp_entity_id_input: str
```

- *Type:* str

---

##### `sign_request_input`<sup>Optional</sup> <a name="sign_request_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput"></a>

```python
sign_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_url_input`<sup>Optional</sup> <a name="sso_url_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput"></a>

```python
sso_url_input: str
```

- *Type:* str

---

##### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

---

##### `sign_request`<sup>Required</sup> <a name="sign_request" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a>

---


### GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri">reset_callback_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId">reset_sp_entity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_callback_uri` <a name="reset_callback_uri" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri"></a>

```python
def reset_callback_uri() -> None
```

##### `reset_sp_entity_id` <a name="reset_sp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId"></a>

```python
def reset_sp_entity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates">sp_certificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput">callback_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput">sp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri">callback_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sp_certificates`<sup>Required</sup> <a name="sp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates"></a>

```python
sp_certificates: GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a>

---

##### `callback_uri_input`<sup>Optional</sup> <a name="callback_uri_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput"></a>

```python
callback_uri_input: str
```

- *Type:* str

---

##### `sp_entity_id_input`<sup>Optional</sup> <a name="sp_entity_id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput"></a>

```python
sp_entity_id_input: str
```

- *Type:* str

---

##### `callback_uri`<sup>Required</sup> <a name="callback_uri" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri"></a>

```python
callback_uri: str
```

- *Type:* str

---

##### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a>

---


### GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList <a name="GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates">GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x509_certificate`<sup>Required</sup> <a name="x509_certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates">GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates</a>

---


### GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_inbound_saml_config

googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIdentityPlatformInboundSamlConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a>]

---



