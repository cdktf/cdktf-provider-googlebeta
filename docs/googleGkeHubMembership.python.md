# `googleGkeHubMembership` Submodule <a name="`googleGkeHubMembership` Submodule" id="@cdktf/provider-google-beta.googleGkeHubMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubMembership <a name="GoogleGkeHubMembership" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership google_gke_hub_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembership(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  membership_id: str,
  authority: GoogleGkeHubMembershipAuthority = None,
  description: str = None,
  endpoint: GoogleGkeHubMembershipEndpoint = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GoogleGkeHubMembershipTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.membershipId">membership_id</a></code> | <code>str</code> | The client-provided identifier of the membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.authority">authority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a></code> | authority block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.description">description</a></code> | <code>str</code> | The name of this entity type to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#id GoogleGkeHubMembership#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the membership. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#project GoogleGkeHubMembership#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.membershipId"></a>

- *Type:* str

The client-provided identifier of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#membership_id GoogleGkeHubMembership#membership_id}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.authority"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a>

authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#authority GoogleGkeHubMembership#authority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.description"></a>

- *Type:* str

The name of this entity type to be displayed on the console.

This field is unavailable in v1 of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#description GoogleGkeHubMembership#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.endpoint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#endpoint GoogleGkeHubMembership#endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#id GoogleGkeHubMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this membership.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#labels GoogleGkeHubMembership#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.location"></a>

- *Type:* str

Location of the membership. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#location GoogleGkeHubMembership#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#project GoogleGkeHubMembership#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#timeouts GoogleGkeHubMembership#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putAuthority">put_authority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putEndpoint">put_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetAuthority">reset_authority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authority` <a name="put_authority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putAuthority"></a>

```python
def put_authority(
  issuer: str
) -> None
```

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putAuthority.parameter.issuer"></a>

- *Type:* str

A JSON Web Token (JWT) issuer URI.

'issuer' must start with 'https://' and // be a valid
with length <2000 characters. For example: 'https://container.googleapis.com/v1/projects/my-project/locations/us-west1/clusters/my-cluster'. If the cluster is provisioned with Terraform, this is '"https://container.googleapis.com/v1/${google_container_cluster.my-cluster.id}"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#issuer GoogleGkeHubMembership#issuer}

---

##### `put_endpoint` <a name="put_endpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putEndpoint"></a>

```python
def put_endpoint(
  gke_cluster: GoogleGkeHubMembershipEndpointGkeCluster = None
) -> None
```

###### `gke_cluster`<sup>Optional</sup> <a name="gke_cluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putEndpoint.parameter.gkeCluster"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a>

gke_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#gke_cluster GoogleGkeHubMembership#gke_cluster}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#create GoogleGkeHubMembership#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#delete GoogleGkeHubMembership#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#update GoogleGkeHubMembership#update}.

---

##### `reset_authority` <a name="reset_authority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetAuthority"></a>

```python
def reset_authority() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleGkeHubMembership resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembership.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembership.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembership.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembership.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleGkeHubMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGkeHubMembership to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGkeHubMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.authority">authority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference">GoogleGkeHubMembershipAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference">GoogleGkeHubMembershipEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference">GoogleGkeHubMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.authorityInput">authority_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.endpointInput">endpoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.membershipIdInput">membership_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.membershipId">membership_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.authority"></a>

```python
authority: GoogleGkeHubMembershipAuthorityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference">GoogleGkeHubMembershipAuthorityOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.endpoint"></a>

```python
endpoint: GoogleGkeHubMembershipEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference">GoogleGkeHubMembershipEndpointOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.timeouts"></a>

```python
timeouts: GoogleGkeHubMembershipTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference">GoogleGkeHubMembershipTimeoutsOutputReference</a>

---

##### `authority_input`<sup>Optional</sup> <a name="authority_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.authorityInput"></a>

```python
authority_input: GoogleGkeHubMembershipAuthority
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.endpointInput"></a>

```python
endpoint_input: GoogleGkeHubMembershipEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `membership_id_input`<sup>Optional</sup> <a name="membership_id_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.membershipIdInput"></a>

```python
membership_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleGkeHubMembershipTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.membershipId"></a>

```python
membership_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubMembershipAuthority <a name="GoogleGkeHubMembershipAuthority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembershipAuthority(
  issuer: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority.property.issuer">issuer</a></code> | <code>str</code> | A JSON Web Token (JWT) issuer URI. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

A JSON Web Token (JWT) issuer URI.

'issuer' must start with 'https://' and // be a valid
with length <2000 characters. For example: 'https://container.googleapis.com/v1/projects/my-project/locations/us-west1/clusters/my-cluster'. If the cluster is provisioned with Terraform, this is '"https://container.googleapis.com/v1/${google_container_cluster.my-cluster.id}"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#issuer GoogleGkeHubMembership#issuer}

---

### GoogleGkeHubMembershipConfig <a name="GoogleGkeHubMembershipConfig" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembershipConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  membership_id: str,
  authority: GoogleGkeHubMembershipAuthority = None,
  description: str = None,
  endpoint: GoogleGkeHubMembershipEndpoint = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GoogleGkeHubMembershipTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.membershipId">membership_id</a></code> | <code>str</code> | The client-provided identifier of the membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.authority">authority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a></code> | authority block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.description">description</a></code> | <code>str</code> | The name of this entity type to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#id GoogleGkeHubMembership#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.location">location</a></code> | <code>str</code> | Location of the membership. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#project GoogleGkeHubMembership#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.membershipId"></a>

```python
membership_id: str
```

- *Type:* str

The client-provided identifier of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#membership_id GoogleGkeHubMembership#membership_id}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.authority"></a>

```python
authority: GoogleGkeHubMembershipAuthority
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a>

authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#authority GoogleGkeHubMembership#authority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The name of this entity type to be displayed on the console.

This field is unavailable in v1 of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#description GoogleGkeHubMembership#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.endpoint"></a>

```python
endpoint: GoogleGkeHubMembershipEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#endpoint GoogleGkeHubMembership#endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#id GoogleGkeHubMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this membership.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#labels GoogleGkeHubMembership#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the membership. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#location GoogleGkeHubMembership#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#project GoogleGkeHubMembership#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.timeouts"></a>

```python
timeouts: GoogleGkeHubMembershipTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#timeouts GoogleGkeHubMembership#timeouts}

---

### GoogleGkeHubMembershipEndpoint <a name="GoogleGkeHubMembershipEndpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembershipEndpoint(
  gke_cluster: GoogleGkeHubMembershipEndpointGkeCluster = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint.property.gkeCluster">gke_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a></code> | gke_cluster block. |

---

##### `gke_cluster`<sup>Optional</sup> <a name="gke_cluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint.property.gkeCluster"></a>

```python
gke_cluster: GoogleGkeHubMembershipEndpointGkeCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a>

gke_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#gke_cluster GoogleGkeHubMembership#gke_cluster}

---

### GoogleGkeHubMembershipEndpointGkeCluster <a name="GoogleGkeHubMembershipEndpointGkeCluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster(
  resource_link: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster.property.resourceLink">resource_link</a></code> | <code>str</code> | Self-link of the GCP resource for the GKE cluster. |

---

##### `resource_link`<sup>Required</sup> <a name="resource_link" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster.property.resourceLink"></a>

```python
resource_link: str
```

- *Type:* str

Self-link of the GCP resource for the GKE cluster.

For example: '//container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster'.
It can be at the most 1000 characters in length. If the cluster is provisioned with Terraform,
this can be '"//container.googleapis.com/${google_container_cluster.my-cluster.id}"' or
'google_container_cluster.my-cluster.id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#resource_link GoogleGkeHubMembership#resource_link}

---

### GoogleGkeHubMembershipTimeouts <a name="GoogleGkeHubMembershipTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembershipTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#create GoogleGkeHubMembership#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#delete GoogleGkeHubMembership#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#update GoogleGkeHubMembership#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#create GoogleGkeHubMembership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#delete GoogleGkeHubMembership#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#update GoogleGkeHubMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubMembershipAuthorityOutputReference <a name="GoogleGkeHubMembershipAuthorityOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubMembershipAuthority
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a>

---


### GoogleGkeHubMembershipEndpointGkeClusterOutputReference <a name="GoogleGkeHubMembershipEndpointGkeClusterOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLinkInput">resource_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLink">resource_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_link_input`<sup>Optional</sup> <a name="resource_link_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLinkInput"></a>

```python
resource_link_input: str
```

- *Type:* str

---

##### `resource_link`<sup>Required</sup> <a name="resource_link" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLink"></a>

```python
resource_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubMembershipEndpointGkeCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a>

---


### GoogleGkeHubMembershipEndpointOutputReference <a name="GoogleGkeHubMembershipEndpointOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.putGkeCluster">put_gke_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resetGkeCluster">reset_gke_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gke_cluster` <a name="put_gke_cluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.putGkeCluster"></a>

```python
def put_gke_cluster(
  resource_link: str
) -> None
```

###### `resource_link`<sup>Required</sup> <a name="resource_link" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.putGkeCluster.parameter.resourceLink"></a>

- *Type:* str

Self-link of the GCP resource for the GKE cluster.

For example: '//container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster'.
It can be at the most 1000 characters in length. If the cluster is provisioned with Terraform,
this can be '"//container.googleapis.com/${google_container_cluster.my-cluster.id}"' or
'google_container_cluster.my-cluster.id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership#resource_link GoogleGkeHubMembership#resource_link}

---

##### `reset_gke_cluster` <a name="reset_gke_cluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resetGkeCluster"></a>

```python
def reset_gke_cluster() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.gkeCluster">gke_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference">GoogleGkeHubMembershipEndpointGkeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.gkeClusterInput">gke_cluster_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_cluster`<sup>Required</sup> <a name="gke_cluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.gkeCluster"></a>

```python
gke_cluster: GoogleGkeHubMembershipEndpointGkeClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference">GoogleGkeHubMembershipEndpointGkeClusterOutputReference</a>

---

##### `gke_cluster_input`<sup>Optional</sup> <a name="gke_cluster_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.gkeClusterInput"></a>

```python
gke_cluster_input: GoogleGkeHubMembershipEndpointGkeCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubMembershipEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a>

---


### GoogleGkeHubMembershipTimeoutsOutputReference <a name="GoogleGkeHubMembershipTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_membership

googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeHubMembershipTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>]

---



