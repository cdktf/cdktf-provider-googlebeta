# `googleServiceNetworkingPeeredDnsDomain` Submodule <a name="`googleServiceNetworkingPeeredDnsDomain` Submodule" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceNetworkingPeeredDnsDomain <a name="GoogleServiceNetworkingPeeredDnsDomain" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain google_service_networking_peered_dns_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_peered_dns_domain

googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_suffix: str,
  name: str,
  network: str,
  id: str = None,
  project: str = None,
  service: str = None,
  timeouts: GoogleServiceNetworkingPeeredDnsDomainTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.dnsSuffix">dns_suffix</a></code> | <code>str</code> | The DNS domain name suffix of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.network">network</a></code> | <code>str</code> | Network in the consumer project to peer with. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#id GoogleServiceNetworkingPeeredDnsDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.service">service</a></code> | <code>str</code> | The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_suffix`<sup>Required</sup> <a name="dns_suffix" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.dnsSuffix"></a>

- *Type:* str

The DNS domain name suffix of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#dns_suffix GoogleServiceNetworkingPeeredDnsDomain#dns_suffix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.name"></a>

- *Type:* str

Name of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#name GoogleServiceNetworkingPeeredDnsDomain#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.network"></a>

- *Type:* str

Network in the consumer project to peer with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#network GoogleServiceNetworkingPeeredDnsDomain#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#id GoogleServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#project GoogleServiceNetworkingPeeredDnsDomain#project}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.service"></a>

- *Type:* str

The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#service GoogleServiceNetworkingPeeredDnsDomain#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#timeouts GoogleServiceNetworkingPeeredDnsDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#create GoogleServiceNetworkingPeeredDnsDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#delete GoogleServiceNetworkingPeeredDnsDomain#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#read GoogleServiceNetworkingPeeredDnsDomain#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_peered_dns_domain

googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_peered_dns_domain

googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_peered_dns_domain

googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_peered_dns_domain

googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleServiceNetworkingPeeredDnsDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleServiceNetworkingPeeredDnsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceNetworkingPeeredDnsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput">dns_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix">dns_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.timeouts"></a>

```python
timeouts: GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a>

---

##### `dns_suffix_input`<sup>Optional</sup> <a name="dns_suffix_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput"></a>

```python
dns_suffix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleServiceNetworkingPeeredDnsDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>]

---

##### `dns_suffix`<sup>Required</sup> <a name="dns_suffix" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix"></a>

```python
dns_suffix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceNetworkingPeeredDnsDomainConfig <a name="GoogleServiceNetworkingPeeredDnsDomainConfig" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_peered_dns_domain

googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_suffix: str,
  name: str,
  network: str,
  id: str = None,
  project: str = None,
  service: str = None,
  timeouts: GoogleServiceNetworkingPeeredDnsDomainTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix">dns_suffix</a></code> | <code>str</code> | The DNS domain name suffix of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.name">name</a></code> | <code>str</code> | Name of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.network">network</a></code> | <code>str</code> | Network in the consumer project to peer with. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#id GoogleServiceNetworkingPeeredDnsDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.project">project</a></code> | <code>str</code> | The ID of the project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.service">service</a></code> | <code>str</code> | The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_suffix`<sup>Required</sup> <a name="dns_suffix" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix"></a>

```python
dns_suffix: str
```

- *Type:* str

The DNS domain name suffix of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#dns_suffix GoogleServiceNetworkingPeeredDnsDomain#dns_suffix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#name GoogleServiceNetworkingPeeredDnsDomain#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Network in the consumer project to peer with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#network GoogleServiceNetworkingPeeredDnsDomain#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#id GoogleServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#project GoogleServiceNetworkingPeeredDnsDomain#project}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#service GoogleServiceNetworkingPeeredDnsDomain#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.timeouts"></a>

```python
timeouts: GoogleServiceNetworkingPeeredDnsDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#timeouts GoogleServiceNetworkingPeeredDnsDomain#timeouts}

---

### GoogleServiceNetworkingPeeredDnsDomainTimeouts <a name="GoogleServiceNetworkingPeeredDnsDomainTimeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_peered_dns_domain

googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#create GoogleServiceNetworkingPeeredDnsDomain#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#delete GoogleServiceNetworkingPeeredDnsDomain#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#read GoogleServiceNetworkingPeeredDnsDomain#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#create GoogleServiceNetworkingPeeredDnsDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#delete GoogleServiceNetworkingPeeredDnsDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_service_networking_peered_dns_domain#read GoogleServiceNetworkingPeeredDnsDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference <a name="GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_peered_dns_domain

googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleServiceNetworkingPeeredDnsDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>]

---



