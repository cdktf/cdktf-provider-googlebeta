# `googleComputeRegionSslPolicy` Submodule <a name="`googleComputeRegionSslPolicy` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionSslPolicy <a name="GoogleComputeRegionSslPolicy" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy google_compute_region_ssl_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_ssl_policy

googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy(
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
  custom_features: typing.List[str] = None,
  description: str = None,
  id: str = None,
  min_tls_version: str = None,
  profile: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleComputeRegionSslPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.customFeatures">custom_features</a></code> | <code>typing.List[str]</code> | A list of features enabled when the selected profile is CUSTOM. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#id GoogleComputeRegionSslPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.minTlsVersion">min_tls_version</a></code> | <code>str</code> | The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.profile">profile</a></code> | <code>str</code> | Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#project GoogleComputeRegionSslPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | The region where the regional SSL policy resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts">GoogleComputeRegionSslPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#name GoogleComputeRegionSslPolicy#name}

---

##### `custom_features`<sup>Optional</sup> <a name="custom_features" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.customFeatures"></a>

- *Type:* typing.List[str]

A list of features enabled when the selected profile is CUSTOM.

The
method returns the set of features that can be specified in this
list. This field must be empty if the profile is not CUSTOM.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for which ciphers are available to use. **Note**: this argument
*must* be present when using the 'CUSTOM' profile. This argument
*must not* be present when using any other profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#custom_features GoogleComputeRegionSslPolicy#custom_features}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#description GoogleComputeRegionSslPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#id GoogleComputeRegionSslPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.minTlsVersion"></a>

- *Type:* str

The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer.

Default value: "TLS_1_0" Possible values: ["TLS_1_0", "TLS_1_1", "TLS_1_2"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#min_tls_version GoogleComputeRegionSslPolicy#min_tls_version}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.profile"></a>

- *Type:* str

Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients.

If using 'CUSTOM',
the set of SSL features to enable must be specified in the
'customFeatures' field.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for information on what cipher suites each profile provides. If
'CUSTOM' is used, the 'custom_features' attribute **must be set**. Default value: "COMPATIBLE" Possible values: ["COMPATIBLE", "MODERN", "RESTRICTED", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#profile GoogleComputeRegionSslPolicy#profile}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#project GoogleComputeRegionSslPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.region"></a>

- *Type:* str

The region where the regional SSL policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#region GoogleComputeRegionSslPolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts">GoogleComputeRegionSslPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#timeouts GoogleComputeRegionSslPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetCustomFeatures">reset_custom_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#create GoogleComputeRegionSslPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#delete GoogleComputeRegionSslPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#update GoogleComputeRegionSslPolicy#update}.

---

##### `reset_custom_features` <a name="reset_custom_features" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetCustomFeatures"></a>

```python
def reset_custom_features() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRegionSslPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_ssl_policy

googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_ssl_policy

googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_ssl_policy

googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_ssl_policy

googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRegionSslPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionSslPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionSslPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionSslPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.enabledFeatures">enabled_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference">GoogleComputeRegionSslPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.customFeaturesInput">custom_features_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts">GoogleComputeRegionSslPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.customFeatures">custom_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `enabled_features`<sup>Required</sup> <a name="enabled_features" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.enabledFeatures"></a>

```python
enabled_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionSslPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference">GoogleComputeRegionSslPolicyTimeoutsOutputReference</a>

---

##### `custom_features_input`<sup>Optional</sup> <a name="custom_features_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.customFeaturesInput"></a>

```python
custom_features_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRegionSslPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts">GoogleComputeRegionSslPolicyTimeouts</a>]

---

##### `custom_features`<sup>Required</sup> <a name="custom_features" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.customFeatures"></a>

```python
custom_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionSslPolicyConfig <a name="GoogleComputeRegionSslPolicyConfig" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_ssl_policy

googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  custom_features: typing.List[str] = None,
  description: str = None,
  id: str = None,
  min_tls_version: str = None,
  profile: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleComputeRegionSslPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.customFeatures">custom_features</a></code> | <code>typing.List[str]</code> | A list of features enabled when the selected profile is CUSTOM. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#id GoogleComputeRegionSslPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.profile">profile</a></code> | <code>str</code> | Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#project GoogleComputeRegionSslPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.region">region</a></code> | <code>str</code> | The region where the regional SSL policy resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts">GoogleComputeRegionSslPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#name GoogleComputeRegionSslPolicy#name}

---

##### `custom_features`<sup>Optional</sup> <a name="custom_features" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.customFeatures"></a>

```python
custom_features: typing.List[str]
```

- *Type:* typing.List[str]

A list of features enabled when the selected profile is CUSTOM.

The
method returns the set of features that can be specified in this
list. This field must be empty if the profile is not CUSTOM.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for which ciphers are available to use. **Note**: this argument
*must* be present when using the 'CUSTOM' profile. This argument
*must not* be present when using any other profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#custom_features GoogleComputeRegionSslPolicy#custom_features}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#description GoogleComputeRegionSslPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#id GoogleComputeRegionSslPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer.

Default value: "TLS_1_0" Possible values: ["TLS_1_0", "TLS_1_1", "TLS_1_2"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#min_tls_version GoogleComputeRegionSslPolicy#min_tls_version}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients.

If using 'CUSTOM',
the set of SSL features to enable must be specified in the
'customFeatures' field.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for information on what cipher suites each profile provides. If
'CUSTOM' is used, the 'custom_features' attribute **must be set**. Default value: "COMPATIBLE" Possible values: ["COMPATIBLE", "MODERN", "RESTRICTED", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#profile GoogleComputeRegionSslPolicy#profile}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#project GoogleComputeRegionSslPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region where the regional SSL policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#region GoogleComputeRegionSslPolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionSslPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts">GoogleComputeRegionSslPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#timeouts GoogleComputeRegionSslPolicy#timeouts}

---

### GoogleComputeRegionSslPolicyTimeouts <a name="GoogleComputeRegionSslPolicyTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_ssl_policy

googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#create GoogleComputeRegionSslPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#delete GoogleComputeRegionSslPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#update GoogleComputeRegionSslPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#create GoogleComputeRegionSslPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#delete GoogleComputeRegionSslPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_region_ssl_policy#update GoogleComputeRegionSslPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionSslPolicyTimeoutsOutputReference <a name="GoogleComputeRegionSslPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_ssl_policy

googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts">GoogleComputeRegionSslPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSslPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSslPolicy.GoogleComputeRegionSslPolicyTimeouts">GoogleComputeRegionSslPolicyTimeouts</a>]

---



