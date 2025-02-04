# `googleIntegrationsAuthConfig` Submodule <a name="`googleIntegrationsAuthConfig` Submodule" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationsAuthConfig <a name="GoogleIntegrationsAuthConfig" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config google_integrations_auth_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig(
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
  location: str,
  client_certificate: GoogleIntegrationsAuthConfigClientCertificate = None,
  decrypted_credential: GoogleIntegrationsAuthConfigDecryptedCredential = None,
  description: str = None,
  expiry_notification_duration: typing.List[str] = None,
  id: str = None,
  override_valid_time: str = None,
  project: str = None,
  timeouts: GoogleIntegrationsAuthConfigTimeouts = None,
  visibility: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The name of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.decryptedCredential">decrypted_credential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | decrypted_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.expiryNotificationDuration">expiry_notification_duration</a></code> | <code>typing.List[str]</code> | User can define the time to receive notification after which the auth config becomes invalid. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.overrideValidTime">override_valid_time</a></code> | <code>str</code> | User provided expiry time to override. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.displayName"></a>

- *Type:* str

The name of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#display_name GoogleIntegrationsAuthConfig#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.location"></a>

- *Type:* str

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#location GoogleIntegrationsAuthConfig#location}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.clientCertificate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_certificate GoogleIntegrationsAuthConfig#client_certificate}

---

##### `decrypted_credential`<sup>Optional</sup> <a name="decrypted_credential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.decryptedCredential"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

decrypted_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#decrypted_credential GoogleIntegrationsAuthConfig#decrypted_credential}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.description"></a>

- *Type:* str

A description of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#description GoogleIntegrationsAuthConfig#description}

---

##### `expiry_notification_duration`<sup>Optional</sup> <a name="expiry_notification_duration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.expiryNotificationDuration"></a>

- *Type:* typing.List[str]

User can define the time to receive notification after which the auth config becomes invalid.

Support up to 30 days. Support granularity in hours.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#expiry_notification_duration GoogleIntegrationsAuthConfig#expiry_notification_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override_valid_time`<sup>Optional</sup> <a name="override_valid_time" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.overrideValidTime"></a>

- *Type:* str

User provided expiry time to override.

For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#override_valid_time GoogleIntegrationsAuthConfig#override_valid_time}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#timeouts GoogleIntegrationsAuthConfig#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.visibility"></a>

- *Type:* str

The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#visibility GoogleIntegrationsAuthConfig#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate">put_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential">put_decrypted_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDecryptedCredential">reset_decrypted_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetExpiryNotificationDuration">reset_expiry_notification_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideValidTime">reset_override_valid_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_certificate` <a name="put_client_certificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate"></a>

```python
def put_client_certificate(
  encrypted_private_key: str,
  ssl_certificate: str,
  passphrase: str = None
) -> None
```

###### `encrypted_private_key`<sup>Required</sup> <a name="encrypted_private_key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate.parameter.encryptedPrivateKey"></a>

- *Type:* str

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#encrypted_private_key GoogleIntegrationsAuthConfig#encrypted_private_key}

---

###### `ssl_certificate`<sup>Required</sup> <a name="ssl_certificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate.parameter.sslCertificate"></a>

- *Type:* str

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#ssl_certificate GoogleIntegrationsAuthConfig#ssl_certificate}

---

###### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate.parameter.passphrase"></a>

- *Type:* str

'passphrase' should be left unset if private key is not encrypted.

Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#passphrase GoogleIntegrationsAuthConfig#passphrase}

---

##### `put_decrypted_credential` <a name="put_decrypted_credential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential"></a>

```python
def put_decrypted_credential(
  credential_type: str,
  auth_token: GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken = None,
  jwt: GoogleIntegrationsAuthConfigDecryptedCredentialJwt = None,
  oauth2_authorization_code: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode = None,
  oauth2_client_credentials: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials = None,
  oidc_token: GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken = None,
  service_account_credentials: GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials = None,
  username_and_password: GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword = None
) -> None
```

###### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.credentialType"></a>

- *Type:* str

Credential type associated with auth configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#credential_type GoogleIntegrationsAuthConfig#credential_type}

---

###### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.authToken"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#auth_token GoogleIntegrationsAuthConfig#auth_token}

---

###### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.jwt"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#jwt GoogleIntegrationsAuthConfig#jwt}

---

###### `oauth2_authorization_code`<sup>Optional</sup> <a name="oauth2_authorization_code" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.oauth2AuthorizationCode"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

oauth2_authorization_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#oauth2_authorization_code GoogleIntegrationsAuthConfig#oauth2_authorization_code}

---

###### `oauth2_client_credentials`<sup>Optional</sup> <a name="oauth2_client_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.oauth2ClientCredentials"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

oauth2_client_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#oauth2_client_credentials GoogleIntegrationsAuthConfig#oauth2_client_credentials}

---

###### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.oidcToken"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#oidc_token GoogleIntegrationsAuthConfig#oidc_token}

---

###### `service_account_credentials`<sup>Optional</sup> <a name="service_account_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.serviceAccountCredentials"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#service_account_credentials GoogleIntegrationsAuthConfig#service_account_credentials}

---

###### `username_and_password`<sup>Optional</sup> <a name="username_and_password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.usernameAndPassword"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

username_and_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#username_and_password GoogleIntegrationsAuthConfig#username_and_password}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#create GoogleIntegrationsAuthConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#delete GoogleIntegrationsAuthConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#update GoogleIntegrationsAuthConfig#update}.

---

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_decrypted_credential` <a name="reset_decrypted_credential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDecryptedCredential"></a>

```python
def reset_decrypted_credential() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expiry_notification_duration` <a name="reset_expiry_notification_duration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetExpiryNotificationDuration"></a>

```python
def reset_expiry_notification_duration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_override_valid_time` <a name="reset_override_valid_time" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideValidTime"></a>

```python
def reset_override_valid_time() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetVisibility"></a>

```python
def reset_visibility() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIntegrationsAuthConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIntegrationsAuthConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIntegrationsAuthConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIntegrationsAuthConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationsAuthConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificate">client_certificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference">GoogleIntegrationsAuthConfigClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.creatorEmail">creator_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredential">decrypted_credential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.encryptedCredential">encrypted_credential</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lastModifierEmail">last_modifier_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference">GoogleIntegrationsAuthConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.validTime">valid_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificateInput">client_certificate_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredentialInput">decrypted_credential_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDurationInput">expiry_notification_duration_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTimeInput">override_valid_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDuration">expiry_notification_duration</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTime">override_valid_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificate"></a>

```python
client_certificate: GoogleIntegrationsAuthConfigClientCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference">GoogleIntegrationsAuthConfigClientCertificateOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator_email`<sup>Required</sup> <a name="creator_email" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.creatorEmail"></a>

```python
creator_email: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `decrypted_credential`<sup>Required</sup> <a name="decrypted_credential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredential"></a>

```python
decrypted_credential: GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference</a>

---

##### `encrypted_credential`<sup>Required</sup> <a name="encrypted_credential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.encryptedCredential"></a>

```python
encrypted_credential: str
```

- *Type:* str

---

##### `last_modifier_email`<sup>Required</sup> <a name="last_modifier_email" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lastModifierEmail"></a>

```python
last_modifier_email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeouts"></a>

```python
timeouts: GoogleIntegrationsAuthConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference">GoogleIntegrationsAuthConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `valid_time`<sup>Required</sup> <a name="valid_time" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.validTime"></a>

```python
valid_time: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificateInput"></a>

```python
client_certificate_input: GoogleIntegrationsAuthConfigClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

---

##### `decrypted_credential_input`<sup>Optional</sup> <a name="decrypted_credential_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredentialInput"></a>

```python
decrypted_credential_input: GoogleIntegrationsAuthConfigDecryptedCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `expiry_notification_duration_input`<sup>Optional</sup> <a name="expiry_notification_duration_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDurationInput"></a>

```python
expiry_notification_duration_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `override_valid_time_input`<sup>Optional</sup> <a name="override_valid_time_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTimeInput"></a>

```python
override_valid_time_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIntegrationsAuthConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `expiry_notification_duration`<sup>Required</sup> <a name="expiry_notification_duration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDuration"></a>

```python
expiry_notification_duration: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `override_valid_time`<sup>Required</sup> <a name="override_valid_time" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTime"></a>

```python
override_valid_time: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationsAuthConfigClientCertificate <a name="GoogleIntegrationsAuthConfigClientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate(
  encrypted_private_key: str,
  ssl_certificate: str,
  passphrase: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey">encrypted_private_key</a></code> | <code>str</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.sslCertificate">ssl_certificate</a></code> | <code>str</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.passphrase">passphrase</a></code> | <code>str</code> | 'passphrase' should be left unset if private key is not encrypted. |

---

##### `encrypted_private_key`<sup>Required</sup> <a name="encrypted_private_key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey"></a>

```python
encrypted_private_key: str
```

- *Type:* str

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#encrypted_private_key GoogleIntegrationsAuthConfig#encrypted_private_key}

---

##### `ssl_certificate`<sup>Required</sup> <a name="ssl_certificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.sslCertificate"></a>

```python
ssl_certificate: str
```

- *Type:* str

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#ssl_certificate GoogleIntegrationsAuthConfig#ssl_certificate}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

'passphrase' should be left unset if private key is not encrypted.

Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#passphrase GoogleIntegrationsAuthConfig#passphrase}

---

### GoogleIntegrationsAuthConfigConfig <a name="GoogleIntegrationsAuthConfigConfig" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  client_certificate: GoogleIntegrationsAuthConfigClientCertificate = None,
  decrypted_credential: GoogleIntegrationsAuthConfigDecryptedCredential = None,
  description: str = None,
  expiry_notification_duration: typing.List[str] = None,
  id: str = None,
  override_valid_time: str = None,
  project: str = None,
  timeouts: GoogleIntegrationsAuthConfigTimeouts = None,
  visibility: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | The name of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.location">location</a></code> | <code>str</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.clientCertificate">client_certificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.decryptedCredential">decrypted_credential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | decrypted_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.description">description</a></code> | <code>str</code> | A description of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.expiryNotificationDuration">expiry_notification_duration</a></code> | <code>typing.List[str]</code> | User can define the time to receive notification after which the auth config becomes invalid. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.overrideValidTime">override_valid_time</a></code> | <code>str</code> | User provided expiry time to override. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.visibility">visibility</a></code> | <code>str</code> | The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#display_name GoogleIntegrationsAuthConfig#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#location GoogleIntegrationsAuthConfig#location}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.clientCertificate"></a>

```python
client_certificate: GoogleIntegrationsAuthConfigClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_certificate GoogleIntegrationsAuthConfig#client_certificate}

---

##### `decrypted_credential`<sup>Optional</sup> <a name="decrypted_credential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.decryptedCredential"></a>

```python
decrypted_credential: GoogleIntegrationsAuthConfigDecryptedCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

decrypted_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#decrypted_credential GoogleIntegrationsAuthConfig#decrypted_credential}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#description GoogleIntegrationsAuthConfig#description}

---

##### `expiry_notification_duration`<sup>Optional</sup> <a name="expiry_notification_duration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.expiryNotificationDuration"></a>

```python
expiry_notification_duration: typing.List[str]
```

- *Type:* typing.List[str]

User can define the time to receive notification after which the auth config becomes invalid.

Support up to 30 days. Support granularity in hours.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#expiry_notification_duration GoogleIntegrationsAuthConfig#expiry_notification_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override_valid_time`<sup>Optional</sup> <a name="override_valid_time" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.overrideValidTime"></a>

```python
override_valid_time: str
```

- *Type:* str

User provided expiry time to override.

For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#override_valid_time GoogleIntegrationsAuthConfig#override_valid_time}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleIntegrationsAuthConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#timeouts GoogleIntegrationsAuthConfig#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#visibility GoogleIntegrationsAuthConfig#visibility}

---

### GoogleIntegrationsAuthConfigDecryptedCredential <a name="GoogleIntegrationsAuthConfigDecryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential(
  credential_type: str,
  auth_token: GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken = None,
  jwt: GoogleIntegrationsAuthConfigDecryptedCredentialJwt = None,
  oauth2_authorization_code: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode = None,
  oauth2_client_credentials: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials = None,
  oidc_token: GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken = None,
  service_account_credentials: GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials = None,
  username_and_password: GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.credentialType">credential_type</a></code> | <code>str</code> | Credential type associated with auth configs. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.authToken">auth_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a></code> | jwt block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode">oauth2_authorization_code</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | oauth2_authorization_code block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials">oauth2_client_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | oauth2_client_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials">service_account_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword">username_and_password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | username_and_password block. |

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Credential type associated with auth configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#credential_type GoogleIntegrationsAuthConfig#credential_type}

---

##### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.authToken"></a>

```python
auth_token: GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#auth_token GoogleIntegrationsAuthConfig#auth_token}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.jwt"></a>

```python
jwt: GoogleIntegrationsAuthConfigDecryptedCredentialJwt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#jwt GoogleIntegrationsAuthConfig#jwt}

---

##### `oauth2_authorization_code`<sup>Optional</sup> <a name="oauth2_authorization_code" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode"></a>

```python
oauth2_authorization_code: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

oauth2_authorization_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#oauth2_authorization_code GoogleIntegrationsAuthConfig#oauth2_authorization_code}

---

##### `oauth2_client_credentials`<sup>Optional</sup> <a name="oauth2_client_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials"></a>

```python
oauth2_client_credentials: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

oauth2_client_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#oauth2_client_credentials GoogleIntegrationsAuthConfig#oauth2_client_credentials}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oidcToken"></a>

```python
oidc_token: GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#oidc_token GoogleIntegrationsAuthConfig#oidc_token}

---

##### `service_account_credentials`<sup>Optional</sup> <a name="service_account_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials"></a>

```python
service_account_credentials: GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#service_account_credentials GoogleIntegrationsAuthConfig#service_account_credentials}

---

##### `username_and_password`<sup>Optional</sup> <a name="username_and_password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword"></a>

```python
username_and_password: GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

username_and_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#username_and_password GoogleIntegrationsAuthConfig#username_and_password}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken <a name="GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken(
  token: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.token">token</a></code> | <code>str</code> | The token for the auth type. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.type">type</a></code> | <code>str</code> | Authentication type, e.g. "Basic", "Bearer", etc. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.token"></a>

```python
token: str
```

- *Type:* str

The token for the auth type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token GoogleIntegrationsAuthConfig#token}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.type"></a>

```python
type: str
```

- *Type:* str

Authentication type, e.g. "Basic", "Bearer", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#type GoogleIntegrationsAuthConfig#type}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialJwt <a name="GoogleIntegrationsAuthConfigDecryptedCredentialJwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt(
  jwt_header: str = None,
  jwt_payload: str = None,
  secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader">jwt_header</a></code> | <code>str</code> | Identifies which algorithm is used to generate the signature. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload">jwt_payload</a></code> | <code>str</code> | Contains a set of claims. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.secret">secret</a></code> | <code>str</code> | User's pre-shared secret to sign the token. |

---

##### `jwt_header`<sup>Optional</sup> <a name="jwt_header" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader"></a>

```python
jwt_header: str
```

- *Type:* str

Identifies which algorithm is used to generate the signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#jwt_header GoogleIntegrationsAuthConfig#jwt_header}

---

##### `jwt_payload`<sup>Optional</sup> <a name="jwt_payload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload"></a>

```python
jwt_payload: str
```

- *Type:* str

Contains a set of claims.

The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#jwt_payload GoogleIntegrationsAuthConfig#jwt_payload}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.secret"></a>

```python
secret: str
```

- *Type:* str

User's pre-shared secret to sign the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#secret GoogleIntegrationsAuthConfig#secret}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode(
  auth_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  scope: str = None,
  token_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint">auth_endpoint</a></code> | <code>str</code> | The auth url endpoint to send the auth code request to. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId">client_id</a></code> | <code>str</code> | The client's id. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret">client_secret</a></code> | <code>str</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope">scope</a></code> | <code>str</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token url endpoint to send the token request to. |

---

##### `auth_endpoint`<sup>Optional</sup> <a name="auth_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint"></a>

```python
auth_endpoint: str
```

- *Type:* str

The auth url endpoint to send the auth code request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#auth_endpoint GoogleIntegrationsAuthConfig#auth_endpoint}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client's id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_id GoogleIntegrationsAuthConfig#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_secret GoogleIntegrationsAuthConfig#client_secret}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope"></a>

```python
scope: str
```

- *Type:* str

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token url endpoint to send the token request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token_endpoint GoogleIntegrationsAuthConfig#token_endpoint}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials(
  client_id: str = None,
  client_secret: str = None,
  request_type: str = None,
  scope: str = None,
  token_endpoint: str = None,
  token_params: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId">client_id</a></code> | <code>str</code> | The client's ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret">client_secret</a></code> | <code>str</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType">request_type</a></code> | <code>str</code> | Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope">scope</a></code> | <code>str</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams">token_params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | token_params block. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_id GoogleIntegrationsAuthConfig#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_secret GoogleIntegrationsAuthConfig#client_secret}

---

##### `request_type`<sup>Optional</sup> <a name="request_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#request_type GoogleIntegrationsAuthConfig#request_type}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope"></a>

```python
scope: str
```

- *Type:* str

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token_endpoint GoogleIntegrationsAuthConfig#token_endpoint}

---

##### `token_params`<sup>Optional</sup> <a name="token_params" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams"></a>

```python
token_params: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

token_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token_params GoogleIntegrationsAuthConfig#token_params}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams(
  entries: typing.Union[IResolvable, typing.List[GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries">entries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]]</code> | entries block. |

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries"></a>

```python
entries: typing.Union[IResolvable, typing.List[GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#entries GoogleIntegrationsAuthConfig#entries}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries(
  key: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey = None,
  value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key">key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | key block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | value block. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key"></a>

```python
key: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#key GoogleIntegrationsAuthConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value"></a>

```python
value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#value GoogleIntegrationsAuthConfig#value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey(
  literal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue">literal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | literal_value block. |

---

##### `literal_value`<sup>Optional</sup> <a name="literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue"></a>

```python
literal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#literal_value GoogleIntegrationsAuthConfig#literal_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue(
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue">string_value</a></code> | <code>str</code> | String. |

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#string_value GoogleIntegrationsAuthConfig#string_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue(
  literal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue">literal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | literal_value block. |

---

##### `literal_value`<sup>Optional</sup> <a name="literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue"></a>

```python
literal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#literal_value GoogleIntegrationsAuthConfig#literal_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue(
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue">string_value</a></code> | <code>str</code> | String. |

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#string_value GoogleIntegrationsAuthConfig#string_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken(
  audience: str = None,
  service_account_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience">audience</a></code> | <code>str</code> | Audience to be used when generating OIDC token. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | The service account email to be used as the identity for the token. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience to be used when generating OIDC token.

The audience claim identifies the recipients that the JWT is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#audience GoogleIntegrationsAuthConfig#audience}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

The service account email to be used as the identity for the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#service_account_email GoogleIntegrationsAuthConfig#service_account_email}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials <a name="GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials(
  scope: str = None,
  service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope">scope</a></code> | <code>str</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount">service_account</a></code> | <code>str</code> | Name of the service account that has the permission to make the request. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope"></a>

```python
scope: str
```

- *Type:* str

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Name of the service account that has the permission to make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#service_account GoogleIntegrationsAuthConfig#service_account}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword <a name="GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword(
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password">password</a></code> | <code>str</code> | Password to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username">username</a></code> | <code>str</code> | Username to be used. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password"></a>

```python
password: str
```

- *Type:* str

Password to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#password GoogleIntegrationsAuthConfig#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username"></a>

```python
username: str
```

- *Type:* str

Username to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#username GoogleIntegrationsAuthConfig#username}

---

### GoogleIntegrationsAuthConfigTimeouts <a name="GoogleIntegrationsAuthConfigTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#create GoogleIntegrationsAuthConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#delete GoogleIntegrationsAuthConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#update GoogleIntegrationsAuthConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#create GoogleIntegrationsAuthConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#delete GoogleIntegrationsAuthConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#update GoogleIntegrationsAuthConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationsAuthConfigClientCertificateOutputReference <a name="GoogleIntegrationsAuthConfigClientCertificateOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase">reset_passphrase</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_passphrase` <a name="reset_passphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase"></a>

```python
def reset_passphrase() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput">encrypted_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput">passphrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput">ssl_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey">encrypted_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphrase">passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate">ssl_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encrypted_private_key_input`<sup>Optional</sup> <a name="encrypted_private_key_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput"></a>

```python
encrypted_private_key_input: str
```

- *Type:* str

---

##### `passphrase_input`<sup>Optional</sup> <a name="passphrase_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput"></a>

```python
passphrase_input: str
```

- *Type:* str

---

##### `ssl_certificate_input`<sup>Optional</sup> <a name="ssl_certificate_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput"></a>

```python
ssl_certificate_input: str
```

- *Type:* str

---

##### `encrypted_private_key`<sup>Required</sup> <a name="encrypted_private_key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey"></a>

```python
encrypted_private_key: str
```

- *Type:* str

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

---

##### `ssl_certificate`<sup>Required</sup> <a name="ssl_certificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate"></a>

```python
ssl_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_token` <a name="reset_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader">reset_jwt_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload">reset_jwt_payload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_jwt_header` <a name="reset_jwt_header" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader"></a>

```python
def reset_jwt_header() -> None
```

##### `reset_jwt_payload` <a name="reset_jwt_payload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload"></a>

```python
def reset_jwt_payload() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt">jwt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput">jwt_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput">jwt_payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader">jwt_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload">jwt_payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt"></a>

```python
jwt: str
```

- *Type:* str

---

##### `jwt_header_input`<sup>Optional</sup> <a name="jwt_header_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput"></a>

```python
jwt_header_input: str
```

- *Type:* str

---

##### `jwt_payload_input`<sup>Optional</sup> <a name="jwt_payload_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput"></a>

```python
jwt_payload_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `jwt_header`<sup>Required</sup> <a name="jwt_header" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader"></a>

```python
jwt_header: str
```

- *Type:* str

---

##### `jwt_payload`<sup>Required</sup> <a name="jwt_payload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload"></a>

```python
jwt_payload: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialJwt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint">reset_auth_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_endpoint` <a name="reset_auth_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint"></a>

```python
def reset_auth_endpoint() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput">auth_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint">auth_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_endpoint_input`<sup>Optional</sup> <a name="auth_endpoint_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput"></a>

```python
auth_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `auth_endpoint`<sup>Required</sup> <a name="auth_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint"></a>

```python
auth_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams">put_token_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType">reset_request_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams">reset_token_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_token_params` <a name="put_token_params" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams"></a>

```python
def put_token_params(
  entries: typing.Union[IResolvable, typing.List[GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries]] = None
) -> None
```

###### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams.parameter.entries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#entries GoogleIntegrationsAuthConfig#entries}

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_request_type` <a name="reset_request_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType"></a>

```python
def reset_request_type() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```

##### `reset_token_params` <a name="reset_token_params" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams"></a>

```python
def reset_token_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams">token_params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput">request_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput">token_params_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType">request_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_params`<sup>Required</sup> <a name="token_params" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams"></a>

```python
token_params: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `request_type_input`<sup>Optional</sup> <a name="request_type_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput"></a>

```python
request_type_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `token_params_input`<sup>Optional</sup> <a name="token_params_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput"></a>

```python
token_params_input: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue">put_literal_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue">reset_literal_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_literal_value` <a name="put_literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue"></a>

```python
def put_literal_value(
  string_value: str = None
) -> None
```

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue.parameter.stringValue"></a>

- *Type:* str

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#string_value GoogleIntegrationsAuthConfig#string_value}

---

##### `reset_literal_value` <a name="reset_literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue"></a>

```python
def reset_literal_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue">literal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput">literal_value_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `literal_value`<sup>Required</sup> <a name="literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue"></a>

```python
literal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a>

---

##### `literal_value_input`<sup>Optional</sup> <a name="literal_value_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput"></a>

```python
literal_value_input: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]]

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey">put_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key` <a name="put_key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey"></a>

```python
def put_key(
  literal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue = None
) -> None
```

###### `literal_value`<sup>Optional</sup> <a name="literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey.parameter.literalValue"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#literal_value GoogleIntegrationsAuthConfig#literal_value}

---

##### `put_value` <a name="put_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue"></a>

```python
def put_value(
  literal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue = None
) -> None
```

###### `literal_value`<sup>Optional</sup> <a name="literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue.parameter.literalValue"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#literal_value GoogleIntegrationsAuthConfig#literal_value}

---

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key">key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput">key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput">value_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key"></a>

```python
key: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value"></a>

```python
value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput"></a>

```python
key_input: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput"></a>

```python
value_input: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue">put_literal_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue">reset_literal_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_literal_value` <a name="put_literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue"></a>

```python
def put_literal_value(
  string_value: str = None
) -> None
```

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue.parameter.stringValue"></a>

- *Type:* str

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#string_value GoogleIntegrationsAuthConfig#string_value}

---

##### `reset_literal_value` <a name="reset_literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue"></a>

```python
def reset_literal_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue">literal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput">literal_value_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `literal_value`<sup>Required</sup> <a name="literal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue"></a>

```python
literal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a>

---

##### `literal_value_input`<sup>Optional</sup> <a name="literal_value_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput"></a>

```python
literal_value_input: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries">put_entries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries">reset_entries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_entries` <a name="put_entries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries"></a>

```python
def put_entries(
  value: typing.Union[IResolvable, typing.List[GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]]

---

##### `reset_entries` <a name="reset_entries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries"></a>

```python
def reset_entries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput">entries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries"></a>

```python
entries: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a>

---

##### `entries_input`<sup>Optional</sup> <a name="entries_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput"></a>

```python
entries_input: typing.Union[IResolvable, typing.List[GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience">reset_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime">token_expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `token_expire_time`<sup>Required</sup> <a name="token_expire_time" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime"></a>

```python
token_expire_time: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken">put_auth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt">put_jwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode">put_oauth2_authorization_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials">put_oauth2_client_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken">put_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials">put_service_account_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword">put_username_and_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken">reset_auth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt">reset_jwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode">reset_oauth2_authorization_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials">reset_oauth2_client_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken">reset_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials">reset_service_account_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword">reset_username_and_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth_token` <a name="put_auth_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken"></a>

```python
def put_auth_token(
  token: str = None,
  type: str = None
) -> None
```

###### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken.parameter.token"></a>

- *Type:* str

The token for the auth type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token GoogleIntegrationsAuthConfig#token}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken.parameter.type"></a>

- *Type:* str

Authentication type, e.g. "Basic", "Bearer", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#type GoogleIntegrationsAuthConfig#type}

---

##### `put_jwt` <a name="put_jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt"></a>

```python
def put_jwt(
  jwt_header: str = None,
  jwt_payload: str = None,
  secret: str = None
) -> None
```

###### `jwt_header`<sup>Optional</sup> <a name="jwt_header" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt.parameter.jwtHeader"></a>

- *Type:* str

Identifies which algorithm is used to generate the signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#jwt_header GoogleIntegrationsAuthConfig#jwt_header}

---

###### `jwt_payload`<sup>Optional</sup> <a name="jwt_payload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt.parameter.jwtPayload"></a>

- *Type:* str

Contains a set of claims.

The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#jwt_payload GoogleIntegrationsAuthConfig#jwt_payload}

---

###### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt.parameter.secret"></a>

- *Type:* str

User's pre-shared secret to sign the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#secret GoogleIntegrationsAuthConfig#secret}

---

##### `put_oauth2_authorization_code` <a name="put_oauth2_authorization_code" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode"></a>

```python
def put_oauth2_authorization_code(
  auth_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  scope: str = None,
  token_endpoint: str = None
) -> None
```

###### `auth_endpoint`<sup>Optional</sup> <a name="auth_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode.parameter.authEndpoint"></a>

- *Type:* str

The auth url endpoint to send the auth code request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#auth_endpoint GoogleIntegrationsAuthConfig#auth_endpoint}

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode.parameter.clientId"></a>

- *Type:* str

The client's id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_id GoogleIntegrationsAuthConfig#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode.parameter.clientSecret"></a>

- *Type:* str

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_secret GoogleIntegrationsAuthConfig#client_secret}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode.parameter.scope"></a>

- *Type:* str

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

###### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode.parameter.tokenEndpoint"></a>

- *Type:* str

The token url endpoint to send the token request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token_endpoint GoogleIntegrationsAuthConfig#token_endpoint}

---

##### `put_oauth2_client_credentials` <a name="put_oauth2_client_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials"></a>

```python
def put_oauth2_client_credentials(
  client_id: str = None,
  client_secret: str = None,
  request_type: str = None,
  scope: str = None,
  token_endpoint: str = None,
  token_params: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.clientId"></a>

- *Type:* str

The client's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_id GoogleIntegrationsAuthConfig#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.clientSecret"></a>

- *Type:* str

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_secret GoogleIntegrationsAuthConfig#client_secret}

---

###### `request_type`<sup>Optional</sup> <a name="request_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.requestType"></a>

- *Type:* str

Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#request_type GoogleIntegrationsAuthConfig#request_type}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.scope"></a>

- *Type:* str

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

###### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token_endpoint GoogleIntegrationsAuthConfig#token_endpoint}

---

###### `token_params`<sup>Optional</sup> <a name="token_params" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.tokenParams"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

token_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token_params GoogleIntegrationsAuthConfig#token_params}

---

##### `put_oidc_token` <a name="put_oidc_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken"></a>

```python
def put_oidc_token(
  audience: str = None,
  service_account_email: str = None
) -> None
```

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken.parameter.audience"></a>

- *Type:* str

Audience to be used when generating OIDC token.

The audience claim identifies the recipients that the JWT is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#audience GoogleIntegrationsAuthConfig#audience}

---

###### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken.parameter.serviceAccountEmail"></a>

- *Type:* str

The service account email to be used as the identity for the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#service_account_email GoogleIntegrationsAuthConfig#service_account_email}

---

##### `put_service_account_credentials` <a name="put_service_account_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials"></a>

```python
def put_service_account_credentials(
  scope: str = None,
  service_account: str = None
) -> None
```

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials.parameter.scope"></a>

- *Type:* str

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials.parameter.serviceAccount"></a>

- *Type:* str

Name of the service account that has the permission to make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#service_account GoogleIntegrationsAuthConfig#service_account}

---

##### `put_username_and_password` <a name="put_username_and_password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword"></a>

```python
def put_username_and_password(
  password: str = None,
  username: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword.parameter.password"></a>

- *Type:* str

Password to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#password GoogleIntegrationsAuthConfig#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword.parameter.username"></a>

- *Type:* str

Username to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#username GoogleIntegrationsAuthConfig#username}

---

##### `reset_auth_token` <a name="reset_auth_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken"></a>

```python
def reset_auth_token() -> None
```

##### `reset_jwt` <a name="reset_jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt"></a>

```python
def reset_jwt() -> None
```

##### `reset_oauth2_authorization_code` <a name="reset_oauth2_authorization_code" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode"></a>

```python
def reset_oauth2_authorization_code() -> None
```

##### `reset_oauth2_client_credentials` <a name="reset_oauth2_client_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials"></a>

```python
def reset_oauth2_client_credentials() -> None
```

##### `reset_oidc_token` <a name="reset_oidc_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken"></a>

```python
def reset_oidc_token() -> None
```

##### `reset_service_account_credentials` <a name="reset_service_account_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials"></a>

```python
def reset_service_account_credentials() -> None
```

##### `reset_username_and_password` <a name="reset_username_and_password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword"></a>

```python
def reset_username_and_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken">auth_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode">oauth2_authorization_code</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials">oauth2_client_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials">service_account_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword">username_and_password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput">auth_token_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput">jwt_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput">oauth2_authorization_code_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput">oauth2_client_credentials_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput">oidc_token_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput">service_account_credentials_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput">username_and_password_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken"></a>

```python
auth_token: GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a>

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt"></a>

```python
jwt: GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a>

---

##### `oauth2_authorization_code`<sup>Required</sup> <a name="oauth2_authorization_code" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode"></a>

```python
oauth2_authorization_code: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a>

---

##### `oauth2_client_credentials`<sup>Required</sup> <a name="oauth2_client_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials"></a>

```python
oauth2_client_credentials: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a>

---

##### `oidc_token`<sup>Required</sup> <a name="oidc_token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken"></a>

```python
oidc_token: GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a>

---

##### `service_account_credentials`<sup>Required</sup> <a name="service_account_credentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials"></a>

```python
service_account_credentials: GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a>

---

##### `username_and_password`<sup>Required</sup> <a name="username_and_password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword"></a>

```python
username_and_password: GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a>

---

##### `auth_token_input`<sup>Optional</sup> <a name="auth_token_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput"></a>

```python
auth_token_input: GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `jwt_input`<sup>Optional</sup> <a name="jwt_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput"></a>

```python
jwt_input: GoogleIntegrationsAuthConfigDecryptedCredentialJwt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

---

##### `oauth2_authorization_code_input`<sup>Optional</sup> <a name="oauth2_authorization_code_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput"></a>

```python
oauth2_authorization_code_input: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---

##### `oauth2_client_credentials_input`<sup>Optional</sup> <a name="oauth2_client_credentials_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput"></a>

```python
oauth2_client_credentials_input: GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---

##### `oidc_token_input`<sup>Optional</sup> <a name="oidc_token_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput"></a>

```python
oidc_token_input: GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---

##### `service_account_credentials_input`<sup>Optional</sup> <a name="service_account_credentials_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput"></a>

```python
service_account_credentials_input: GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---

##### `username_and_password_input`<sup>Optional</sup> <a name="username_and_password_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput"></a>

```python
username_and_password_input: GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---


### GoogleIntegrationsAuthConfigTimeoutsOutputReference <a name="GoogleIntegrationsAuthConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integrations_auth_config

googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIntegrationsAuthConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>]

---



