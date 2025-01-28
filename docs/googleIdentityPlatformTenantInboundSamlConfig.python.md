# `googleIdentityPlatformTenantInboundSamlConfig` Submodule <a name="`googleIdentityPlatformTenantInboundSamlConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenantInboundSamlConfig <a name="GoogleIdentityPlatformTenantInboundSamlConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config google_identity_platform_tenant_inbound_saml_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig(
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
  idp_config: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig,
  name: str,
  sp_config: GoogleIdentityPlatformTenantInboundSamlConfigSpConfig,
  tenant: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformTenantInboundSamlConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.tenant">tenant</a></code> | <code>str</code> | The name of the tenant where this inbound SAML config resource exists. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#id GoogleIdentityPlatformTenantInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#project GoogleIdentityPlatformTenantInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.displayName"></a>

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#display_name GoogleIdentityPlatformTenantInboundSamlConfig#display_name}

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#idp_config GoogleIdentityPlatformTenantInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.name"></a>

- *Type:* str

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#name GoogleIdentityPlatformTenantInboundSamlConfig#name}

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.spConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sp_config GoogleIdentityPlatformTenantInboundSamlConfig#sp_config}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.tenant"></a>

- *Type:* str

The name of the tenant where this inbound SAML config resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#tenant GoogleIdentityPlatformTenantInboundSamlConfig#tenant}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#enabled GoogleIdentityPlatformTenantInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#id GoogleIdentityPlatformTenantInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#project GoogleIdentityPlatformTenantInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#timeouts GoogleIdentityPlatformTenantInboundSamlConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putIdpConfig">put_idp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putSpConfig">put_sp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_idp_config` <a name="put_idp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putIdpConfig"></a>

```python
def put_idp_config(
  idp_certificates: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]],
  idp_entity_id: str,
  sso_url: str,
  sign_request: typing.Union[bool, IResolvable] = None
) -> None
```

###### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putIdpConfig.parameter.idpCertificates"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#idp_certificates GoogleIdentityPlatformTenantInboundSamlConfig#idp_certificates}

---

###### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putIdpConfig.parameter.idpEntityId"></a>

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#idp_entity_id GoogleIdentityPlatformTenantInboundSamlConfig#idp_entity_id}

---

###### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putIdpConfig.parameter.ssoUrl"></a>

- *Type:* str

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sso_url GoogleIdentityPlatformTenantInboundSamlConfig#sso_url}

---

###### `sign_request`<sup>Optional</sup> <a name="sign_request" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putIdpConfig.parameter.signRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sign_request GoogleIdentityPlatformTenantInboundSamlConfig#sign_request}

---

##### `put_sp_config` <a name="put_sp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putSpConfig"></a>

```python
def put_sp_config(
  callback_uri: str,
  sp_entity_id: str
) -> None
```

###### `callback_uri`<sup>Required</sup> <a name="callback_uri" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putSpConfig.parameter.callbackUri"></a>

- *Type:* str

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#callback_uri GoogleIdentityPlatformTenantInboundSamlConfig#callback_uri}

---

###### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putSpConfig.parameter.spEntityId"></a>

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sp_entity_id GoogleIdentityPlatformTenantInboundSamlConfig#sp_entity_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#create GoogleIdentityPlatformTenantInboundSamlConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#delete GoogleIdentityPlatformTenantInboundSamlConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#update GoogleIdentityPlatformTenantInboundSamlConfig#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformTenantInboundSamlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIdentityPlatformTenantInboundSamlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIdentityPlatformTenantInboundSamlConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIdentityPlatformTenantInboundSamlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformTenantInboundSamlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idpConfigInput">idp_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.spConfigInput">sp_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idpConfig"></a>

```python
idp_config: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference</a>

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.spConfig"></a>

```python
sp_config: GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_config_input`<sup>Optional</sup> <a name="idp_config_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idpConfigInput"></a>

```python
idp_config_input: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sp_config_input`<sup>Optional</sup> <a name="sp_config_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.spConfigInput"></a>

```python
sp_config_input: GoogleIdentityPlatformTenantInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a>

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIdentityPlatformTenantInboundSamlConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantInboundSamlConfigConfig <a name="GoogleIdentityPlatformTenantInboundSamlConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  idp_config: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig,
  name: str,
  sp_config: GoogleIdentityPlatformTenantInboundSamlConfigSpConfig,
  tenant: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformTenantInboundSamlConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.name">name</a></code> | <code>str</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.spConfig">sp_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.tenant">tenant</a></code> | <code>str</code> | The name of the tenant where this inbound SAML config resource exists. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#id GoogleIdentityPlatformTenantInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#project GoogleIdentityPlatformTenantInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#display_name GoogleIdentityPlatformTenantInboundSamlConfig#display_name}

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.idpConfig"></a>

```python
idp_config: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#idp_config GoogleIdentityPlatformTenantInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#name GoogleIdentityPlatformTenantInboundSamlConfig#name}

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.spConfig"></a>

```python
sp_config: GoogleIdentityPlatformTenantInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sp_config GoogleIdentityPlatformTenantInboundSamlConfig#sp_config}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

The name of the tenant where this inbound SAML config resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#tenant GoogleIdentityPlatformTenantInboundSamlConfig#tenant}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#enabled GoogleIdentityPlatformTenantInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#id GoogleIdentityPlatformTenantInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#project GoogleIdentityPlatformTenantInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformTenantInboundSamlConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#timeouts GoogleIdentityPlatformTenantInboundSamlConfig#timeouts}

---

### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig(
  idp_certificates: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]],
  idp_entity_id: str,
  sso_url: str,
  sign_request: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpCertificates">idp_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | idp_certificates block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | Unique identifier for all SAML entities. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.ssoUrl">sso_url</a></code> | <code>str</code> | URL to send Authentication request to. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if outbounding SAMLRequest should be signed. |

---

##### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpCertificates"></a>

```python
idp_certificates: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#idp_certificates GoogleIdentityPlatformTenantInboundSamlConfig#idp_certificates}

---

##### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#idp_entity_id GoogleIdentityPlatformTenantInboundSamlConfig#idp_entity_id}

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sso_url GoogleIdentityPlatformTenantInboundSamlConfig#sso_url}

---

##### `sign_request`<sup>Optional</sup> <a name="sign_request" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sign_request GoogleIdentityPlatformTenantInboundSamlConfig#sign_request}

---

### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates(
  x509_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | The x509 certificate. |

---

##### `x509_certificate`<sup>Optional</sup> <a name="x509_certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

The x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#x509_certificate GoogleIdentityPlatformTenantInboundSamlConfig#x509_certificate}

---

### GoogleIdentityPlatformTenantInboundSamlConfigSpConfig <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig(
  callback_uri: str,
  sp_entity_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.property.callbackUri">callback_uri</a></code> | <code>str</code> | Callback URI where responses from IDP are handled. Must start with 'https://'. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | Unique identifier for all SAML entities. |

---

##### `callback_uri`<sup>Required</sup> <a name="callback_uri" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.property.callbackUri"></a>

```python
callback_uri: str
```

- *Type:* str

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#callback_uri GoogleIdentityPlatformTenantInboundSamlConfig#callback_uri}

---

##### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sp_entity_id GoogleIdentityPlatformTenantInboundSamlConfig#sp_entity_id}

---

### GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates()
```


### GoogleIdentityPlatformTenantInboundSamlConfigTimeouts <a name="GoogleIdentityPlatformTenantInboundSamlConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#create GoogleIdentityPlatformTenantInboundSamlConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#delete GoogleIdentityPlatformTenantInboundSamlConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#update GoogleIdentityPlatformTenantInboundSamlConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#create GoogleIdentityPlatformTenantInboundSamlConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#delete GoogleIdentityPlatformTenantInboundSamlConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#update GoogleIdentityPlatformTenantInboundSamlConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

---


### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate">reset_x509_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x509_certificate` <a name="reset_x509_certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate"></a>

```python
def reset_x509_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput">x509_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x509_certificate_input`<sup>Optional</sup> <a name="x509_certificate_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput"></a>

```python
x509_certificate_input: str
```

- *Type:* str

---

##### `x509_certificate`<sup>Required</sup> <a name="x509_certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]

---


### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.putIdpCertificates">put_idp_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resetSignRequest">reset_sign_request</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idp_certificates` <a name="put_idp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.putIdpCertificates"></a>

```python
def put_idp_certificates(
  value: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.putIdpCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

---

##### `reset_sign_request` <a name="reset_sign_request" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resetSignRequest"></a>

```python
def reset_sign_request() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificates">idp_certificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput">idp_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput">idp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequestInput">sign_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput">sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idp_certificates`<sup>Required</sup> <a name="idp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificates"></a>

```python
idp_certificates: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList</a>

---

##### `idp_certificates_input`<sup>Optional</sup> <a name="idp_certificates_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput"></a>

```python
idp_certificates_input: typing.Union[IResolvable, typing.List[GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>]]

---

##### `idp_entity_id_input`<sup>Optional</sup> <a name="idp_entity_id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput"></a>

```python
idp_entity_id_input: str
```

- *Type:* str

---

##### `sign_request_input`<sup>Optional</sup> <a name="sign_request_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequestInput"></a>

```python
sign_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_url_input`<sup>Optional</sup> <a name="sso_url_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput"></a>

```python
sso_url_input: str
```

- *Type:* str

---

##### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

---

##### `sign_request`<sup>Required</sup> <a name="sign_request" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a>

---


### GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spCertificates">sp_certificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUriInput">callback_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput">sp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUri">callback_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sp_certificates`<sup>Required</sup> <a name="sp_certificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spCertificates"></a>

```python
sp_certificates: GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList</a>

---

##### `callback_uri_input`<sup>Optional</sup> <a name="callback_uri_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUriInput"></a>

```python
callback_uri_input: str
```

- *Type:* str

---

##### `sp_entity_id_input`<sup>Optional</sup> <a name="sp_entity_id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput"></a>

```python
sp_entity_id_input: str
```

- *Type:* str

---

##### `callback_uri`<sup>Required</sup> <a name="callback_uri" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUri"></a>

```python
callback_uri: str
```

- *Type:* str

---

##### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformTenantInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a>

---


### GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate">x509_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x509_certificate`<sup>Required</sup> <a name="x509_certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate"></a>

```python
x509_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates</a>

---


### GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_inbound_saml_config

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIdentityPlatformTenantInboundSamlConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>]

---



