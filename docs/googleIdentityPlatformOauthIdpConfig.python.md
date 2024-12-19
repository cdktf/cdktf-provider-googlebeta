# `googleIdentityPlatformOauthIdpConfig` Submodule <a name="`googleIdentityPlatformOauthIdpConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformOauthIdpConfig <a name="GoogleIdentityPlatformOauthIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config google_identity_platform_oauth_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_oauth_idp_config

googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig(
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
  issuer: str,
  name: str,
  client_secret: str = None,
  display_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformOauthIdpConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The client id of an OAuth client. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#id GoogleIdentityPlatformOauthIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#project GoogleIdentityPlatformOauthIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.clientId"></a>

- *Type:* str

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#client_id GoogleIdentityPlatformOauthIdpConfig#client_id}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.issuer"></a>

- *Type:* str

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#issuer GoogleIdentityPlatformOauthIdpConfig#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.name"></a>

- *Type:* str

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#name GoogleIdentityPlatformOauthIdpConfig#name}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.clientSecret"></a>

- *Type:* str

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#client_secret GoogleIdentityPlatformOauthIdpConfig#client_secret}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.displayName"></a>

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#display_name GoogleIdentityPlatformOauthIdpConfig#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#enabled GoogleIdentityPlatformOauthIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#id GoogleIdentityPlatformOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#project GoogleIdentityPlatformOauthIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#timeouts GoogleIdentityPlatformOauthIdpConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#create GoogleIdentityPlatformOauthIdpConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#delete GoogleIdentityPlatformOauthIdpConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#update GoogleIdentityPlatformOauthIdpConfig#update}.

---

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformOauthIdpConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_oauth_idp_config

googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_oauth_idp_config

googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_oauth_idp_config

googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_oauth_idp_config

googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIdentityPlatformOauthIdpConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIdentityPlatformOauthIdpConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIdentityPlatformOauthIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformOauthIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIdentityPlatformOauthIdpConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformOauthIdpConfigConfig <a name="GoogleIdentityPlatformOauthIdpConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_oauth_idp_config

googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  issuer: str,
  name: str,
  client_secret: str = None,
  display_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformOauthIdpConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.clientId">client_id</a></code> | <code>str</code> | The client id of an OAuth client. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.issuer">issuer</a></code> | <code>str</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.name">name</a></code> | <code>str</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#id GoogleIdentityPlatformOauthIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#project GoogleIdentityPlatformOauthIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#client_id GoogleIdentityPlatformOauthIdpConfig#client_id}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#issuer GoogleIdentityPlatformOauthIdpConfig#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#name GoogleIdentityPlatformOauthIdpConfig#name}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#client_secret GoogleIdentityPlatformOauthIdpConfig#client_secret}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#display_name GoogleIdentityPlatformOauthIdpConfig#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#enabled GoogleIdentityPlatformOauthIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#id GoogleIdentityPlatformOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#project GoogleIdentityPlatformOauthIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformOauthIdpConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#timeouts GoogleIdentityPlatformOauthIdpConfig#timeouts}

---

### GoogleIdentityPlatformOauthIdpConfigTimeouts <a name="GoogleIdentityPlatformOauthIdpConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_oauth_idp_config

googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#create GoogleIdentityPlatformOauthIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#delete GoogleIdentityPlatformOauthIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#update GoogleIdentityPlatformOauthIdpConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#create GoogleIdentityPlatformOauthIdpConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#delete GoogleIdentityPlatformOauthIdpConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_oauth_idp_config#update GoogleIdentityPlatformOauthIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_oauth_idp_config

googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIdentityPlatformOauthIdpConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>]

---



