# `googleComputeRegionSecurityPolicy` Submodule <a name="`googleComputeRegionSecurityPolicy` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionSecurityPolicy <a name="GoogleComputeRegionSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy google_compute_region_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy(
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
  ddos_protection_config: GoogleComputeRegionSecurityPolicyDdosProtectionConfig = None,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleComputeRegionSecurityPolicyTimeouts = None,
  type: str = None,
  user_defined_fields: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyUserDefinedFields]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.ddosProtectionConfig">ddos_protection_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | ddos_protection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created Region Security Policy should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.type">type</a></code> | <code>str</code> | The type indicates the intended use of the security policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.userDefinedFields">user_defined_fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]]</code> | user_defined_fields block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `ddos_protection_config`<sup>Optional</sup> <a name="ddos_protection_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.ddosProtectionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

ddos_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#ddos_protection_config GoogleComputeRegionSecurityPolicy#ddos_protection_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#description GoogleComputeRegionSecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#region GoogleComputeRegionSecurityPolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#timeouts GoogleComputeRegionSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.type"></a>

- *Type:* str

The type indicates the intended use of the security policy.

* CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
* CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
* CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
  This field can be set only at resource creation time. Possible values: ["CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#type GoogleComputeRegionSecurityPolicy#type}

---

##### `user_defined_fields`<sup>Optional</sup> <a name="user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.userDefinedFields"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]]

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#user_defined_fields GoogleComputeRegionSecurityPolicy#user_defined_fields}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putDdosProtectionConfig">put_ddos_protection_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putUserDefinedFields">put_user_defined_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDdosProtectionConfig">reset_ddos_protection_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetUserDefinedFields">reset_user_defined_fields</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ddos_protection_config` <a name="put_ddos_protection_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putDdosProtectionConfig"></a>

```python
def put_ddos_protection_config(
  ddos_protection: str
) -> None
```

###### `ddos_protection`<sup>Required</sup> <a name="ddos_protection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putDdosProtectionConfig.parameter.ddosProtection"></a>

- *Type:* str

Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.

* ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
* ADVANCED_PREVIEW: flag to enable the security policy in preview mode. Possible values: ["ADVANCED", "ADVANCED_PREVIEW", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#ddos_protection GoogleComputeRegionSecurityPolicy#ddos_protection}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#create GoogleComputeRegionSecurityPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#delete GoogleComputeRegionSecurityPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#update GoogleComputeRegionSecurityPolicy#update}.

---

##### `put_user_defined_fields` <a name="put_user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putUserDefinedFields"></a>

```python
def put_user_defined_fields(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyUserDefinedFields]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putUserDefinedFields.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]]

---

##### `reset_ddos_protection_config` <a name="reset_ddos_protection_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDdosProtectionConfig"></a>

```python
def reset_ddos_protection_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_user_defined_fields` <a name="reset_user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetUserDefinedFields"></a>

```python
def reset_user_defined_fields() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionSecurityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig">ddos_protection_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId">self_link_with_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFields">user_defined_fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfigInput">ddos_protection_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFieldsInput">user_defined_fields_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ddos_protection_config`<sup>Required</sup> <a name="ddos_protection_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig"></a>

```python
ddos_protection_config: GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_with_policy_id`<sup>Required</sup> <a name="self_link_with_policy_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId"></a>

```python
self_link_with_policy_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyTimeoutsOutputReference</a>

---

##### `user_defined_fields`<sup>Required</sup> <a name="user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFields"></a>

```python
user_defined_fields: GoogleComputeRegionSecurityPolicyUserDefinedFieldsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a>

---

##### `ddos_protection_config_input`<sup>Optional</sup> <a name="ddos_protection_config_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfigInput"></a>

```python
ddos_protection_config_input: GoogleComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_defined_fields_input`<sup>Optional</sup> <a name="user_defined_fields_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFieldsInput"></a>

```python
user_defined_fields_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyUserDefinedFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionSecurityPolicyConfig <a name="GoogleComputeRegionSecurityPolicyConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ddos_protection_config: GoogleComputeRegionSecurityPolicyDdosProtectionConfig = None,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleComputeRegionSecurityPolicyTimeouts = None,
  type: str = None,
  user_defined_fields: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyUserDefinedFields]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig">ddos_protection_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | ddos_protection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created Region Security Policy should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.type">type</a></code> | <code>str</code> | The type indicates the intended use of the security policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.userDefinedFields">user_defined_fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]]</code> | user_defined_fields block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `ddos_protection_config`<sup>Optional</sup> <a name="ddos_protection_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig"></a>

```python
ddos_protection_config: GoogleComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

ddos_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#ddos_protection_config GoogleComputeRegionSecurityPolicy#ddos_protection_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#description GoogleComputeRegionSecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#region GoogleComputeRegionSecurityPolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#timeouts GoogleComputeRegionSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type indicates the intended use of the security policy.

* CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
* CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
* CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
  This field can be set only at resource creation time. Possible values: ["CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#type GoogleComputeRegionSecurityPolicy#type}

---

##### `user_defined_fields`<sup>Optional</sup> <a name="user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.userDefinedFields"></a>

```python
user_defined_fields: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyUserDefinedFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]]

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#user_defined_fields GoogleComputeRegionSecurityPolicy#user_defined_fields}

---

### GoogleComputeRegionSecurityPolicyDdosProtectionConfig <a name="GoogleComputeRegionSecurityPolicyDdosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig(
  ddos_protection: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection">ddos_protection</a></code> | <code>str</code> | Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses. |

---

##### `ddos_protection`<sup>Required</sup> <a name="ddos_protection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection"></a>

```python
ddos_protection: str
```

- *Type:* str

Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.

* ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
* ADVANCED_PREVIEW: flag to enable the security policy in preview mode. Possible values: ["ADVANCED", "ADVANCED_PREVIEW", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#ddos_protection GoogleComputeRegionSecurityPolicy#ddos_protection}

---

### GoogleComputeRegionSecurityPolicyTimeouts <a name="GoogleComputeRegionSecurityPolicyTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#create GoogleComputeRegionSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#delete GoogleComputeRegionSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#update GoogleComputeRegionSecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#create GoogleComputeRegionSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#delete GoogleComputeRegionSecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#update GoogleComputeRegionSecurityPolicy#update}.

---

### GoogleComputeRegionSecurityPolicyUserDefinedFields <a name="GoogleComputeRegionSecurityPolicyUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields(
  base: str,
  mask: str = None,
  name: str = None,
  offset: typing.Union[int, float] = None,
  size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.base">base</a></code> | <code>str</code> | The base relative to which 'offset' is measured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.mask">mask</a></code> | <code>str</code> | If specified, apply this mask (bitwise AND) to the field to ignore bits before matching. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.name">name</a></code> | <code>str</code> | The name of this field. Must be unique within the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset of the first byte of the field (in network byte order) relative to 'base'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of the field in bytes. Valid values: 1-4. |

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.base"></a>

```python
base: str
```

- *Type:* str

The base relative to which 'offset' is measured.

Possible values are:

* IPV4: Points to the beginning of the IPv4 header.
* IPV6: Points to the beginning of the IPv6 header.
* TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
* UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments. Possible values: ["IPV4", "IPV6", "TCP", "UDP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#base GoogleComputeRegionSecurityPolicy#base}

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.mask"></a>

```python
mask: str
```

- *Type:* str

If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.

Encoded as a hexadecimal number (starting with "0x").
The last byte of the field (in network byte order) corresponds to the least significant byte of the mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#mask GoogleComputeRegionSecurityPolicy#mask}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this field. Must be unique within the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Offset of the first byte of the field (in network byte order) relative to 'base'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#offset GoogleComputeRegionSecurityPolicy#offset}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the field in bytes. Valid values: 1-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.43.0/docs/resources/google_compute_region_security_policy#size GoogleComputeRegionSecurityPolicy#size}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput">ddos_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection">ddos_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ddos_protection_input`<sup>Optional</sup> <a name="ddos_protection_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput"></a>

```python
ddos_protection_input: str
```

- *Type:* str

---

##### `ddos_protection`<sup>Required</sup> <a name="ddos_protection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection"></a>

```python
ddos_protection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---


### GoogleComputeRegionSecurityPolicyTimeoutsOutputReference <a name="GoogleComputeRegionSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>]

---


### GoogleComputeRegionSecurityPolicyUserDefinedFieldsList <a name="GoogleComputeRegionSecurityPolicyUserDefinedFieldsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyUserDefinedFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]]

---


### GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference <a name="GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy

googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset">reset_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize">reset_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_offset` <a name="reset_offset" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset"></a>

```python
def reset_offset() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize"></a>

```python
def reset_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput">base_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput">mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base">base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask">mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_input`<sup>Optional</sup> <a name="base_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput"></a>

```python
base_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput"></a>

```python
mask_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base"></a>

```python
base: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask"></a>

```python
mask: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyUserDefinedFields]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>]

---



