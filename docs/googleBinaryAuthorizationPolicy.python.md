# `googleBinaryAuthorizationPolicy` Submodule <a name="`googleBinaryAuthorizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBinaryAuthorizationPolicy <a name="GoogleBinaryAuthorizationPolicy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy google_binary_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_admission_rule: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule,
  admission_whitelist_patterns: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns]] = None,
  cluster_admission_rules: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyClusterAdmissionRules]] = None,
  description: str = None,
  global_policy_evaluation_mode: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBinaryAuthorizationPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.defaultAdmissionRule">default_admission_rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.admissionWhitelistPatterns">admission_whitelist_patterns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]]</code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.clusterAdmissionRules">cluster_admission_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]]</code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.globalPolicyEvaluationMode">global_policy_evaluation_mode</a></code> | <code>str</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#id GoogleBinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_admission_rule`<sup>Required</sup> <a name="default_admission_rule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.defaultAdmissionRule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#default_admission_rule GoogleBinaryAuthorizationPolicy#default_admission_rule}

---

##### `admission_whitelist_patterns`<sup>Optional</sup> <a name="admission_whitelist_patterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.admissionWhitelistPatterns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]]

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#admission_whitelist_patterns GoogleBinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `cluster_admission_rules`<sup>Optional</sup> <a name="cluster_admission_rules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.clusterAdmissionRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]]

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#cluster_admission_rules GoogleBinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.description"></a>

- *Type:* str

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#description GoogleBinaryAuthorizationPolicy#description}

---

##### `global_policy_evaluation_mode`<sup>Optional</sup> <a name="global_policy_evaluation_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.globalPolicyEvaluationMode"></a>

- *Type:* str

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#global_policy_evaluation_mode GoogleBinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#id GoogleBinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#timeouts GoogleBinaryAuthorizationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putAdmissionWhitelistPatterns">put_admission_whitelist_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putClusterAdmissionRules">put_cluster_admission_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule">put_default_admission_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns">reset_admission_whitelist_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetClusterAdmissionRules">reset_cluster_admission_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode">reset_global_policy_evaluation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_admission_whitelist_patterns` <a name="put_admission_whitelist_patterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putAdmissionWhitelistPatterns"></a>

```python
def put_admission_whitelist_patterns(
  value: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putAdmissionWhitelistPatterns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]]

---

##### `put_cluster_admission_rules` <a name="put_cluster_admission_rules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putClusterAdmissionRules"></a>

```python
def put_cluster_admission_rules(
  value: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyClusterAdmissionRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putClusterAdmissionRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]]

---

##### `put_default_admission_rule` <a name="put_default_admission_rule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule"></a>

```python
def put_default_admission_rule(
  enforcement_mode: str,
  evaluation_mode: str,
  require_attestations_by: typing.List[str] = None
) -> None
```

###### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.enforcementMode"></a>

- *Type:* str

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}

---

###### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.evaluationMode"></a>

- *Type:* str

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}

---

###### `require_attestations_by`<sup>Optional</sup> <a name="require_attestations_by" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.requireAttestationsBy"></a>

- *Type:* typing.List[str]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#create GoogleBinaryAuthorizationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#delete GoogleBinaryAuthorizationPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#update GoogleBinaryAuthorizationPolicy#update}.

---

##### `reset_admission_whitelist_patterns` <a name="reset_admission_whitelist_patterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns"></a>

```python
def reset_admission_whitelist_patterns() -> None
```

##### `reset_cluster_admission_rules` <a name="reset_cluster_admission_rules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetClusterAdmissionRules"></a>

```python
def reset_cluster_admission_rules() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_global_policy_evaluation_mode` <a name="reset_global_policy_evaluation_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode"></a>

```python
def reset_global_policy_evaluation_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBinaryAuthorizationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBinaryAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBinaryAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatterns">admission_whitelist_patterns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRules">cluster_admission_rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList">GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRule">default_admission_rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference">GoogleBinaryAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput">admission_whitelist_patterns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRulesInput">cluster_admission_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRuleInput">default_admission_rule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput">global_policy_evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationMode">global_policy_evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admission_whitelist_patterns`<sup>Required</sup> <a name="admission_whitelist_patterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatterns"></a>

```python
admission_whitelist_patterns: GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a>

---

##### `cluster_admission_rules`<sup>Required</sup> <a name="cluster_admission_rules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRules"></a>

```python
cluster_admission_rules: GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList">GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList</a>

---

##### `default_admission_rule`<sup>Required</sup> <a name="default_admission_rule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRule"></a>

```python
default_admission_rule: GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeouts"></a>

```python
timeouts: GoogleBinaryAuthorizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference">GoogleBinaryAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `admission_whitelist_patterns_input`<sup>Optional</sup> <a name="admission_whitelist_patterns_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput"></a>

```python
admission_whitelist_patterns_input: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]]

---

##### `cluster_admission_rules_input`<sup>Optional</sup> <a name="cluster_admission_rules_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRulesInput"></a>

```python
cluster_admission_rules_input: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyClusterAdmissionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]]

---

##### `default_admission_rule_input`<sup>Optional</sup> <a name="default_admission_rule_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRuleInput"></a>

```python
default_admission_rule_input: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `global_policy_evaluation_mode_input`<sup>Optional</sup> <a name="global_policy_evaluation_mode_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput"></a>

```python
global_policy_evaluation_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBinaryAuthorizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `global_policy_evaluation_mode`<sup>Required</sup> <a name="global_policy_evaluation_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationMode"></a>

```python
global_policy_evaluation_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns <a name="GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns(
  name_pattern: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern">name_pattern</a></code> | <code>str</code> | An image name pattern to whitelist, in the form 'registry/path/to/image'. |

---

##### `name_pattern`<sup>Required</sup> <a name="name_pattern" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern"></a>

```python
name_pattern: str
```

- *Type:* str

An image name pattern to whitelist, in the form 'registry/path/to/image'.

This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#name_pattern GoogleBinaryAuthorizationPolicy#name_pattern}

---

### GoogleBinaryAuthorizationPolicyClusterAdmissionRules <a name="GoogleBinaryAuthorizationPolicyClusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules(
  cluster: str,
  enforcement_mode: str,
  evaluation_mode: str,
  require_attestations_by: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.cluster">cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#cluster GoogleBinaryAuthorizationPolicy#cluster}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy">require_attestations_by</a></code> | <code>typing.List[str]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#cluster GoogleBinaryAuthorizationPolicy#cluster}.

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}

---

##### `require_attestations_by`<sup>Optional</sup> <a name="require_attestations_by" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy"></a>

```python
require_attestations_by: typing.List[str]
```

- *Type:* typing.List[str]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleBinaryAuthorizationPolicyConfig <a name="GoogleBinaryAuthorizationPolicyConfig" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_admission_rule: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule,
  admission_whitelist_patterns: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns]] = None,
  cluster_admission_rules: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyClusterAdmissionRules]] = None,
  description: str = None,
  global_policy_evaluation_mode: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBinaryAuthorizationPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.defaultAdmissionRule">default_admission_rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns">admission_whitelist_patterns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]]</code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.clusterAdmissionRules">cluster_admission_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]]</code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.description">description</a></code> | <code>str</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode">global_policy_evaluation_mode</a></code> | <code>str</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#id GoogleBinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_admission_rule`<sup>Required</sup> <a name="default_admission_rule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.defaultAdmissionRule"></a>

```python
default_admission_rule: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#default_admission_rule GoogleBinaryAuthorizationPolicy#default_admission_rule}

---

##### `admission_whitelist_patterns`<sup>Optional</sup> <a name="admission_whitelist_patterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns"></a>

```python
admission_whitelist_patterns: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]]

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#admission_whitelist_patterns GoogleBinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `cluster_admission_rules`<sup>Optional</sup> <a name="cluster_admission_rules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.clusterAdmissionRules"></a>

```python
cluster_admission_rules: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyClusterAdmissionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]]

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#cluster_admission_rules GoogleBinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#description GoogleBinaryAuthorizationPolicy#description}

---

##### `global_policy_evaluation_mode`<sup>Optional</sup> <a name="global_policy_evaluation_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode"></a>

```python
global_policy_evaluation_mode: str
```

- *Type:* str

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#global_policy_evaluation_mode GoogleBinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#id GoogleBinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleBinaryAuthorizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#timeouts GoogleBinaryAuthorizationPolicy#timeouts}

---

### GoogleBinaryAuthorizationPolicyDefaultAdmissionRule <a name="GoogleBinaryAuthorizationPolicyDefaultAdmissionRule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule(
  enforcement_mode: str,
  evaluation_mode: str,
  require_attestations_by: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy">require_attestations_by</a></code> | <code>typing.List[str]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}

---

##### `require_attestations_by`<sup>Optional</sup> <a name="require_attestations_by" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy"></a>

```python
require_attestations_by: typing.List[str]
```

- *Type:* typing.List[str]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleBinaryAuthorizationPolicyTimeouts <a name="GoogleBinaryAuthorizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#create GoogleBinaryAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#delete GoogleBinaryAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#update GoogleBinaryAuthorizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#create GoogleBinaryAuthorizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#delete GoogleBinaryAuthorizationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_policy#update GoogleBinaryAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList <a name="GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]]

---


### GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference <a name="GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput">name_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern">name_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_pattern_input`<sup>Optional</sup> <a name="name_pattern_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput"></a>

```python
name_pattern_input: str
```

- *Type:* str

---

##### `name_pattern`<sup>Required</sup> <a name="name_pattern" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern"></a>

```python
name_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]

---


### GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList <a name="GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationPolicyClusterAdmissionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]]

---


### GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference <a name="GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy">reset_require_attestations_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_require_attestations_by` <a name="reset_require_attestations_by" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy"></a>

```python
def reset_require_attestations_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput">evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput">require_attestations_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy">require_attestations_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `evaluation_mode_input`<sup>Optional</sup> <a name="evaluation_mode_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput"></a>

```python
evaluation_mode_input: str
```

- *Type:* str

---

##### `require_attestations_by_input`<sup>Optional</sup> <a name="require_attestations_by_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput"></a>

```python
require_attestations_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

---

##### `require_attestations_by`<sup>Required</sup> <a name="require_attestations_by" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy"></a>

```python
require_attestations_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBinaryAuthorizationPolicyClusterAdmissionRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>]

---


### GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference <a name="GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy">reset_require_attestations_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_require_attestations_by` <a name="reset_require_attestations_by" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy"></a>

```python
def reset_require_attestations_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput">evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput">require_attestations_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy">require_attestations_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `evaluation_mode_input`<sup>Optional</sup> <a name="evaluation_mode_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput"></a>

```python
evaluation_mode_input: str
```

- *Type:* str

---

##### `require_attestations_by_input`<sup>Optional</sup> <a name="require_attestations_by_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput"></a>

```python
require_attestations_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

---

##### `require_attestations_by`<sup>Required</sup> <a name="require_attestations_by" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy"></a>

```python
require_attestations_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

---


### GoogleBinaryAuthorizationPolicyTimeoutsOutputReference <a name="GoogleBinaryAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_policy

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBinaryAuthorizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>]

---



