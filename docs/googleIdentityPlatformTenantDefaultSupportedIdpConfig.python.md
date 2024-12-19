# `googleIdentityPlatformTenantDefaultSupportedIdpConfig` Submodule <a name="`googleIdentityPlatformTenantDefaultSupportedIdpConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfig <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config google_identity_platform_tenant_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_default_supported_idp_config

googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  client_secret: str,
  idp_id: str,
  tenant: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.idpId">idp_id</a></code> | <code>str</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.tenant">tenant</a></code> | <code>str</code> | The name of the tenant where this DefaultSupportedIdpConfig resource exists. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#project GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.clientId"></a>

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.clientSecret"></a>

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_secret GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_secret}

---

##### `idp_id`<sup>Required</sup> <a name="idp_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.idpId"></a>

- *Type:* str

ID of the IDP. Possible values include:.

* 'apple.com'
* 'facebook.com'
* 'gc.apple.com'
* 'github.com'
* 'google.com'
* 'linkedin.com'
* 'microsoft.com'
* 'playgames.google.com'
* 'twitter.com'
* 'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#idp_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#idp_id}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.tenant"></a>

- *Type:* str

The name of the tenant where this DefaultSupportedIdpConfig resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#tenant GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#tenant}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#enabled GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#project GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#timeouts GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#create GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#delete GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#update GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformTenantDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_default_supported_idp_config

googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_default_supported_idp_config

googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_default_supported_idp_config

googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_default_supported_idp_config

googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIdentityPlatformTenantDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIdentityPlatformTenantDefaultSupportedIdpConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIdentityPlatformTenantDefaultSupportedIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformTenantDefaultSupportedIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput">idp_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId">idp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_id_input`<sup>Optional</sup> <a name="idp_id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput"></a>

```python
idp_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_id`<sup>Required</sup> <a name="idp_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId"></a>

```python
idp_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_default_supported_idp_config

googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  client_secret: str,
  idp_id: str,
  tenant: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId">idp_id</a></code> | <code>str</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant">tenant</a></code> | <code>str</code> | The name of the tenant where this DefaultSupportedIdpConfig resource exists. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#project GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_secret GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_secret}

---

##### `idp_id`<sup>Required</sup> <a name="idp_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId"></a>

```python
idp_id: str
```

- *Type:* str

ID of the IDP. Possible values include:.

* 'apple.com'
* 'facebook.com'
* 'gc.apple.com'
* 'github.com'
* 'google.com'
* 'linkedin.com'
* 'microsoft.com'
* 'playgames.google.com'
* 'twitter.com'
* 'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#idp_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#idp_id}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

The name of the tenant where this DefaultSupportedIdpConfig resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#tenant GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#tenant}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#enabled GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#project GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#timeouts GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#timeouts}

---

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_default_supported_idp_config

googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#create GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#delete GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#update GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#create GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#delete GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#update GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant_default_supported_idp_config

googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>]

---



