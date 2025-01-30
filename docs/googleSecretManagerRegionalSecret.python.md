# `googleSecretManagerRegionalSecret` Submodule <a name="`googleSecretManagerRegionalSecret` Submodule" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecretManagerRegionalSecret <a name="GoogleSecretManagerRegionalSecret" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret google_secret_manager_regional_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  secret_id: str,
  annotations: typing.Mapping[str] = None,
  customer_managed_encryption: GoogleSecretManagerRegionalSecretCustomerManagedEncryption = None,
  expire_time: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  rotation: GoogleSecretManagerRegionalSecretRotation = None,
  timeouts: GoogleSecretManagerRegionalSecretTimeouts = None,
  topics: typing.Union[IResolvable, typing.List[GoogleSecretManagerRegionalSecretTopics]] = None,
  ttl: str = None,
  version_aliases: typing.Mapping[str] = None,
  version_destroy_ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Custom metadata about the regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | customer_managed_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.expireTime">expire_time</a></code> | <code>str</code> | Timestamp in UTC when the regional secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#id GoogleSecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels assigned to this regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#project GoogleSecretManagerRegionalSecret#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.topics">topics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]]</code> | topics block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL for the regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.versionAliases">version_aliases</a></code> | <code>typing.Mapping[str]</code> | Mapping from version alias to version name. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.versionDestroyTtl">version_destroy_ttl</a></code> | <code>str</code> | Secret Version TTL after destruction request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.location"></a>

- *Type:* str

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#location GoogleSecretManagerRegionalSecret#location}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.secretId"></a>

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#secret_id GoogleSecretManagerRegionalSecret#secret_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Custom metadata about the regional secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#annotations GoogleSecretManagerRegionalSecret#annotations}

---

##### `customer_managed_encryption`<sup>Optional</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.customerManagedEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#customer_managed_encryption GoogleSecretManagerRegionalSecret#customer_managed_encryption}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.expireTime"></a>

- *Type:* str

Timestamp in UTC when the regional secret is scheduled to expire.

This is always provided on
output, regardless of what was sent on input. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z". Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#expire_time GoogleSecretManagerRegionalSecret#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#id GoogleSecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels assigned to this regional secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#labels GoogleSecretManagerRegionalSecret#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#project GoogleSecretManagerRegionalSecret#project}.

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.rotation"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#rotation GoogleSecretManagerRegionalSecret#rotation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#timeouts GoogleSecretManagerRegionalSecret#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.topics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]]

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#topics GoogleSecretManagerRegionalSecret#topics}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL for the regional secret.

A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s". Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#ttl GoogleSecretManagerRegionalSecret#ttl}

---

##### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.versionAliases"></a>

- *Type:* typing.Mapping[str]

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#version_aliases GoogleSecretManagerRegionalSecret#version_aliases}

---

##### `version_destroy_ttl`<sup>Optional</sup> <a name="version_destroy_ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.versionDestroyTtl"></a>

- *Type:* str

Secret Version TTL after destruction request.

This is a part of the delayed delete feature on Secret Version.
For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
on calling destroy instead the version goes to a disabled state and
the actual destruction happens after this TTL expires. It must be atleast 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#version_destroy_ttl GoogleSecretManagerRegionalSecret#version_destroy_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putCustomerManagedEncryption">put_customer_managed_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation">put_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTopics">put_topics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetCustomerManagedEncryption">reset_customer_managed_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetRotation">reset_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTopics">reset_topics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionAliases">reset_version_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionDestroyTtl">reset_version_destroy_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_customer_managed_encryption` <a name="put_customer_managed_encryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putCustomerManagedEncryption"></a>

```python
def put_customer_managed_encryption(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putCustomerManagedEncryption.parameter.kmsKeyName"></a>

- *Type:* str

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#kms_key_name GoogleSecretManagerRegionalSecret#kms_key_name}

---

##### `put_rotation` <a name="put_rotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation"></a>

```python
def put_rotation(
  next_rotation_time: str = None,
  rotation_period: str = None
) -> None
```

###### `next_rotation_time`<sup>Optional</sup> <a name="next_rotation_time" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation.parameter.nextRotationTime"></a>

- *Type:* str

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#next_rotation_time GoogleSecretManagerRegionalSecret#next_rotation_time}

---

###### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation.parameter.rotationPeriod"></a>

- *Type:* str

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h)
and at most 3153600000s (100 years). If rotationPeriod is set, 'next_rotation_time' must
be set. 'next_rotation_time' will be advanced by this period when the service
automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#rotation_period GoogleSecretManagerRegionalSecret#rotation_period}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#create GoogleSecretManagerRegionalSecret#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#delete GoogleSecretManagerRegionalSecret#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#update GoogleSecretManagerRegionalSecret#update}.

---

##### `put_topics` <a name="put_topics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTopics"></a>

```python
def put_topics(
  value: typing.Union[IResolvable, typing.List[GoogleSecretManagerRegionalSecretTopics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTopics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]]

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_customer_managed_encryption` <a name="reset_customer_managed_encryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetCustomerManagedEncryption"></a>

```python
def reset_customer_managed_encryption() -> None
```

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rotation` <a name="reset_rotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetRotation"></a>

```python
def reset_rotation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_topics` <a name="reset_topics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTopics"></a>

```python
def reset_topics() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_version_aliases` <a name="reset_version_aliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionAliases"></a>

```python
def reset_version_aliases() -> None
```

##### `reset_version_destroy_ttl` <a name="reset_version_destroy_ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionDestroyTtl"></a>

```python
def reset_version_destroy_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSecretManagerRegionalSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSecretManagerRegionalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecretManagerRegionalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference">GoogleSecretManagerRegionalSecretRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference">GoogleSecretManagerRegionalSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList">GoogleSecretManagerRegionalSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryptionInput">customer_managed_encryption_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotationInput">rotation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topicsInput">topics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliasesInput">version_aliases_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtlInput">version_destroy_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliases">version_aliases</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtl">version_destroy_ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `customer_managed_encryption`<sup>Required</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotation"></a>

```python
rotation: GoogleSecretManagerRegionalSecretRotationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference">GoogleSecretManagerRegionalSecretRotationOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeouts"></a>

```python
timeouts: GoogleSecretManagerRegionalSecretTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference">GoogleSecretManagerRegionalSecretTimeoutsOutputReference</a>

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topics"></a>

```python
topics: GoogleSecretManagerRegionalSecretTopicsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList">GoogleSecretManagerRegionalSecretTopicsList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `customer_managed_encryption_input`<sup>Optional</sup> <a name="customer_managed_encryption_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryptionInput"></a>

```python
customer_managed_encryption_input: GoogleSecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rotation_input`<sup>Optional</sup> <a name="rotation_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotationInput"></a>

```python
rotation_input: GoogleSecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSecretManagerRegionalSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>]

---

##### `topics_input`<sup>Optional</sup> <a name="topics_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topicsInput"></a>

```python
topics_input: typing.Union[IResolvable, typing.List[GoogleSecretManagerRegionalSecretTopics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `version_aliases_input`<sup>Optional</sup> <a name="version_aliases_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliasesInput"></a>

```python
version_aliases_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_destroy_ttl_input`<sup>Optional</sup> <a name="version_destroy_ttl_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtlInput"></a>

```python
version_destroy_ttl_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `version_aliases`<sup>Required</sup> <a name="version_aliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliases"></a>

```python
version_aliases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_destroy_ttl`<sup>Required</sup> <a name="version_destroy_ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtl"></a>

```python
version_destroy_ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecretManagerRegionalSecretConfig <a name="GoogleSecretManagerRegionalSecretConfig" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  secret_id: str,
  annotations: typing.Mapping[str] = None,
  customer_managed_encryption: GoogleSecretManagerRegionalSecretCustomerManagedEncryption = None,
  expire_time: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  rotation: GoogleSecretManagerRegionalSecretRotation = None,
  timeouts: GoogleSecretManagerRegionalSecretTimeouts = None,
  topics: typing.Union[IResolvable, typing.List[GoogleSecretManagerRegionalSecretTopics]] = None,
  ttl: str = None,
  version_aliases: typing.Mapping[str] = None,
  version_destroy_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.location">location</a></code> | <code>str</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.secretId">secret_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Custom metadata about the regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | customer_managed_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.expireTime">expire_time</a></code> | <code>str</code> | Timestamp in UTC when the regional secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#id GoogleSecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels assigned to this regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#project GoogleSecretManagerRegionalSecret#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.topics">topics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]]</code> | topics block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL for the regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionAliases">version_aliases</a></code> | <code>typing.Mapping[str]</code> | Mapping from version alias to version name. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionDestroyTtl">version_destroy_ttl</a></code> | <code>str</code> | Secret Version TTL after destruction request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#location GoogleSecretManagerRegionalSecret#location}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#secret_id GoogleSecretManagerRegionalSecret#secret_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom metadata about the regional secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#annotations GoogleSecretManagerRegionalSecret#annotations}

---

##### `customer_managed_encryption`<sup>Optional</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: GoogleSecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#customer_managed_encryption GoogleSecretManagerRegionalSecret#customer_managed_encryption}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

Timestamp in UTC when the regional secret is scheduled to expire.

This is always provided on
output, regardless of what was sent on input. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z". Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#expire_time GoogleSecretManagerRegionalSecret#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#id GoogleSecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels assigned to this regional secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#labels GoogleSecretManagerRegionalSecret#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#project GoogleSecretManagerRegionalSecret#project}.

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.rotation"></a>

```python
rotation: GoogleSecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#rotation GoogleSecretManagerRegionalSecret#rotation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.timeouts"></a>

```python
timeouts: GoogleSecretManagerRegionalSecretTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#timeouts GoogleSecretManagerRegionalSecret#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.topics"></a>

```python
topics: typing.Union[IResolvable, typing.List[GoogleSecretManagerRegionalSecretTopics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]]

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#topics GoogleSecretManagerRegionalSecret#topics}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL for the regional secret.

A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s". Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#ttl GoogleSecretManagerRegionalSecret#ttl}

---

##### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionAliases"></a>

```python
version_aliases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#version_aliases GoogleSecretManagerRegionalSecret#version_aliases}

---

##### `version_destroy_ttl`<sup>Optional</sup> <a name="version_destroy_ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionDestroyTtl"></a>

```python
version_destroy_ttl: str
```

- *Type:* str

Secret Version TTL after destruction request.

This is a part of the delayed delete feature on Secret Version.
For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
on calling destroy instead the version goes to a disabled state and
the actual destruction happens after this TTL expires. It must be atleast 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#version_destroy_ttl GoogleSecretManagerRegionalSecret#version_destroy_ttl}

---

### GoogleSecretManagerRegionalSecretCustomerManagedEncryption <a name="GoogleSecretManagerRegionalSecretCustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#kms_key_name GoogleSecretManagerRegionalSecret#kms_key_name}

---

### GoogleSecretManagerRegionalSecretRotation <a name="GoogleSecretManagerRegionalSecretRotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation(
  next_rotation_time: str = None,
  rotation_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | Timestamp in UTC at which the Secret is scheduled to rotate. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | The Duration between rotation notifications. |

---

##### `next_rotation_time`<sup>Optional</sup> <a name="next_rotation_time" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#next_rotation_time GoogleSecretManagerRegionalSecret#next_rotation_time}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h)
and at most 3153600000s (100 years). If rotationPeriod is set, 'next_rotation_time' must
be set. 'next_rotation_time' will be advanced by this period when the service
automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#rotation_period GoogleSecretManagerRegionalSecret#rotation_period}

---

### GoogleSecretManagerRegionalSecretTimeouts <a name="GoogleSecretManagerRegionalSecretTimeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#create GoogleSecretManagerRegionalSecret#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#delete GoogleSecretManagerRegionalSecret#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#update GoogleSecretManagerRegionalSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#create GoogleSecretManagerRegionalSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#delete GoogleSecretManagerRegionalSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#update GoogleSecretManagerRegionalSecret#update}.

---

### GoogleSecretManagerRegionalSecretTopics <a name="GoogleSecretManagerRegionalSecretTopics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics.property.name">name</a></code> | <code>str</code> | The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*.

For publication to succeed, the Secret Manager Service
Agent service account must have pubsub.publisher permissions on the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_secret_manager_regional_secret#name GoogleSecretManagerRegionalSecret#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference <a name="GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---


### GoogleSecretManagerRegionalSecretRotationOutputReference <a name="GoogleSecretManagerRegionalSecretRotationOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime">reset_next_rotation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_next_rotation_time` <a name="reset_next_rotation_time" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime"></a>

```python
def reset_next_rotation_time() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput">next_rotation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput">rotation_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `next_rotation_time_input`<sup>Optional</sup> <a name="next_rotation_time_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput"></a>

```python
next_rotation_time_input: str
```

- *Type:* str

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput"></a>

```python
rotation_period_input: str
```

- *Type:* str

---

##### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

---


### GoogleSecretManagerRegionalSecretTimeoutsOutputReference <a name="GoogleSecretManagerRegionalSecretTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSecretManagerRegionalSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>]

---


### GoogleSecretManagerRegionalSecretTopicsList <a name="GoogleSecretManagerRegionalSecretTopicsList" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSecretManagerRegionalSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSecretManagerRegionalSecretTopics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]]

---


### GoogleSecretManagerRegionalSecretTopicsOutputReference <a name="GoogleSecretManagerRegionalSecretTopicsOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secret_manager_regional_secret

googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSecretManagerRegionalSecretTopics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics">GoogleSecretManagerRegionalSecretTopics</a>]

---



