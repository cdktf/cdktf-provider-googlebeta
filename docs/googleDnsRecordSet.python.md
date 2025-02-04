# `googleDnsRecordSet` Submodule <a name="`googleDnsRecordSet` Submodule" id="@cdktf/provider-google-beta.googleDnsRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsRecordSet <a name="GoogleDnsRecordSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set google_dns_record_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_zone: str,
  name: str,
  type: str,
  id: str = None,
  project: str = None,
  routing_policy: GoogleDnsRecordSetRoutingPolicy = None,
  rrdatas: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.managedZone">managed_zone</a></code> | <code>str</code> | The name of the zone in which this record set will reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.name">name</a></code> | <code>str</code> | The DNS name this record set will apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.type">type</a></code> | <code>str</code> | The DNS record set type. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#id GoogleDnsRecordSet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.routingPolicy">routing_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | routing_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | The string data for the records in this record set whose meaning depends on the DNS type. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The time-to-live of this record set (seconds). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_zone`<sup>Required</sup> <a name="managed_zone" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.managedZone"></a>

- *Type:* str

The name of the zone in which this record set will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#managed_zone GoogleDnsRecordSet#managed_zone}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.name"></a>

- *Type:* str

The DNS name this record set will apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#name GoogleDnsRecordSet#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.type"></a>

- *Type:* str

The DNS record set type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#type GoogleDnsRecordSet#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#id GoogleDnsRecordSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.routingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#routing_policy GoogleDnsRecordSet#routing_policy}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.rrdatas"></a>

- *Type:* typing.List[str]

The string data for the records in this record set whose meaning depends on the DNS type.

For TXT record, if the string data contains spaces, add surrounding " if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add "" inside the Terraform configuration string (e.g. "first255characters""morecharacters").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The time-to-live of this record set (seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ttl GoogleDnsRecordSet#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy">put_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRoutingPolicy">reset_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRrdatas">reset_rrdatas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routing_policy` <a name="put_routing_policy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy"></a>

```python
def put_routing_policy(
  enable_geo_fencing: typing.Union[bool, IResolvable] = None,
  geo: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeo]] = None,
  health_check: str = None,
  primary_backup: GoogleDnsRecordSetRoutingPolicyPrimaryBackup = None,
  wrr: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrr]] = None
) -> None
```

###### `enable_geo_fencing`<sup>Optional</sup> <a name="enable_geo_fencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy.parameter.enableGeoFencing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable fencing for geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#enable_geo_fencing GoogleDnsRecordSet#enable_geo_fencing}

---

###### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy.parameter.geo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]]

geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#geo GoogleDnsRecordSet#geo}

---

###### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy.parameter.healthCheck"></a>

- *Type:* str

Specifies the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#health_check GoogleDnsRecordSet#health_check}

---

###### `primary_backup`<sup>Optional</sup> <a name="primary_backup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy.parameter.primaryBackup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

primary_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#primary_backup GoogleDnsRecordSet#primary_backup}

---

###### `wrr`<sup>Optional</sup> <a name="wrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy.parameter.wrr"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]]

wrr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#wrr GoogleDnsRecordSet#wrr}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_routing_policy` <a name="reset_routing_policy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRoutingPolicy"></a>

```python
def reset_routing_policy() -> None
```

##### `reset_rrdatas` <a name="reset_rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRrdatas"></a>

```python
def reset_rrdatas() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDnsRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDnsRecordSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDnsRecordSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDnsRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDnsRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicy">routing_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference">GoogleDnsRecordSetRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZoneInput">managed_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicyInput">routing_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatasInput">rrdatas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZone">managed_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicy"></a>

```python
routing_policy: GoogleDnsRecordSetRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference">GoogleDnsRecordSetRoutingPolicyOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_zone_input`<sup>Optional</sup> <a name="managed_zone_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZoneInput"></a>

```python
managed_zone_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `routing_policy_input`<sup>Optional</sup> <a name="routing_policy_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicyInput"></a>

```python
routing_policy_input: GoogleDnsRecordSetRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

---

##### `rrdatas_input`<sup>Optional</sup> <a name="rrdatas_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatasInput"></a>

```python
rrdatas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_zone`<sup>Required</sup> <a name="managed_zone" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZone"></a>

```python
managed_zone: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsRecordSetConfig <a name="GoogleDnsRecordSetConfig" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_zone: str,
  name: str,
  type: str,
  id: str = None,
  project: str = None,
  routing_policy: GoogleDnsRecordSetRoutingPolicy = None,
  rrdatas: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.managedZone">managed_zone</a></code> | <code>str</code> | The name of the zone in which this record set will reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.name">name</a></code> | <code>str</code> | The DNS name this record set will apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.type">type</a></code> | <code>str</code> | The DNS record set type. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#id GoogleDnsRecordSet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.routingPolicy">routing_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | routing_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | The string data for the records in this record set whose meaning depends on the DNS type. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The time-to-live of this record set (seconds). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_zone`<sup>Required</sup> <a name="managed_zone" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.managedZone"></a>

```python
managed_zone: str
```

- *Type:* str

The name of the zone in which this record set will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#managed_zone GoogleDnsRecordSet#managed_zone}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The DNS name this record set will apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#name GoogleDnsRecordSet#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The DNS record set type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#type GoogleDnsRecordSet#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#id GoogleDnsRecordSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.routingPolicy"></a>

```python
routing_policy: GoogleDnsRecordSetRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#routing_policy GoogleDnsRecordSet#routing_policy}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

The string data for the records in this record set whose meaning depends on the DNS type.

For TXT record, if the string data contains spaces, add surrounding " if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add "" inside the Terraform configuration string (e.g. "first255characters""morecharacters").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time-to-live of this record set (seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ttl GoogleDnsRecordSet#ttl}

---

### GoogleDnsRecordSetRoutingPolicy <a name="GoogleDnsRecordSetRoutingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy(
  enable_geo_fencing: typing.Union[bool, IResolvable] = None,
  geo: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeo]] = None,
  health_check: str = None,
  primary_backup: GoogleDnsRecordSetRoutingPolicyPrimaryBackup = None,
  wrr: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrr]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.enableGeoFencing">enable_geo_fencing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to enable fencing for geo queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.geo">geo</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]]</code> | geo block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.healthCheck">health_check</a></code> | <code>str</code> | Specifies the health check. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.primaryBackup">primary_backup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a></code> | primary_backup block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.wrr">wrr</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]]</code> | wrr block. |

---

##### `enable_geo_fencing`<sup>Optional</sup> <a name="enable_geo_fencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.enableGeoFencing"></a>

```python
enable_geo_fencing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable fencing for geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#enable_geo_fencing GoogleDnsRecordSet#enable_geo_fencing}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.geo"></a>

```python
geo: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]]

geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#geo GoogleDnsRecordSet#geo}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

Specifies the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#health_check GoogleDnsRecordSet#health_check}

---

##### `primary_backup`<sup>Optional</sup> <a name="primary_backup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.primaryBackup"></a>

```python
primary_backup: GoogleDnsRecordSetRoutingPolicyPrimaryBackup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

primary_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#primary_backup GoogleDnsRecordSet#primary_backup}

---

##### `wrr`<sup>Optional</sup> <a name="wrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.wrr"></a>

```python
wrr: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]]

wrr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#wrr GoogleDnsRecordSet#wrr}

---

### GoogleDnsRecordSetRoutingPolicyGeo <a name="GoogleDnsRecordSetRoutingPolicyGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo(
  location: str,
  health_checked_targets: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets = None,
  rrdatas: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.location">location</a></code> | <code>str</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.location"></a>

```python
location: str
```

- *Type:* str

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#location GoogleDnsRecordSet#location}

---

##### `health_checked_targets`<sup>Optional</sup> <a name="health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets"></a>

```python
health_checked_targets: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}.

---

### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets(
  external_endpoints: typing.List[str] = None,
  internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.externalEndpoints">external_endpoints</a></code> | <code>typing.List[str]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers">internal_load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | internal_load_balancers block. |

---

##### `external_endpoints`<sup>Optional</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.externalEndpoints"></a>

```python
external_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `internal_load_balancers`<sup>Optional</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```python
internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers(
  ip_address: str,
  ip_protocol: str,
  network_url: str,
  port: str,
  project: str,
  load_balancer_type: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">ip_address</a></code> | <code>str</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">network_url</a></code> | <code>str</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port">port</a></code> | <code>str</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project">project</a></code> | <code>str</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region">region</a></code> | <code>str</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```python
port: str
```

- *Type:* str

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackup <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup(
  backup_geo: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]],
  primary: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary,
  enable_geo_fencing_for_backups: typing.Union[bool, IResolvable] = None,
  trickle_ratio: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo">backup_geo</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]</code> | backup_geo block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | primary block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups">enable_geo_fencing_for_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to enable fencing for backup geo queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio">trickle_ratio</a></code> | <code>typing.Union[int, float]</code> | Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy. |

---

##### `backup_geo`<sup>Required</sup> <a name="backup_geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo"></a>

```python
backup_geo: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

backup_geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#backup_geo GoogleDnsRecordSet#backup_geo}

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.primary"></a>

```python
primary: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#primary GoogleDnsRecordSet#primary}

---

##### `enable_geo_fencing_for_backups`<sup>Optional</sup> <a name="enable_geo_fencing_for_backups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups"></a>

```python
enable_geo_fencing_for_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable fencing for backup geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#enable_geo_fencing_for_backups GoogleDnsRecordSet#enable_geo_fencing_for_backups}

---

##### `trickle_ratio`<sup>Optional</sup> <a name="trickle_ratio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio"></a>

```python
trickle_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#trickle_ratio GoogleDnsRecordSet#trickle_ratio}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo(
  location: str,
  health_checked_targets: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets = None,
  rrdatas: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location">location</a></code> | <code>str</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location"></a>

```python
location: str
```

- *Type:* str

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#location GoogleDnsRecordSet#location}

---

##### `health_checked_targets`<sup>Optional</sup> <a name="health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets"></a>

```python
health_checked_targets: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}.

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets(
  external_endpoints: typing.List[str] = None,
  internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.externalEndpoints">external_endpoints</a></code> | <code>typing.List[str]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers">internal_load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | internal_load_balancers block. |

---

##### `external_endpoints`<sup>Optional</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.externalEndpoints"></a>

```python
external_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `internal_load_balancers`<sup>Optional</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```python
internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers(
  ip_address: str,
  ip_protocol: str,
  network_url: str,
  port: str,
  project: str,
  load_balancer_type: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">ip_address</a></code> | <code>str</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">network_url</a></code> | <code>str</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port">port</a></code> | <code>str</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project">project</a></code> | <code>str</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region">region</a></code> | <code>str</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```python
port: str
```

- *Type:* str

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary(
  external_endpoints: typing.List[str] = None,
  internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.externalEndpoints">external_endpoints</a></code> | <code>typing.List[str]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers">internal_load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]</code> | internal_load_balancers block. |

---

##### `external_endpoints`<sup>Optional</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.externalEndpoints"></a>

```python
external_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `internal_load_balancers`<sup>Optional</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers"></a>

```python
internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers(
  ip_address: str,
  ip_protocol: str,
  network_url: str,
  port: str,
  project: str,
  load_balancer_type: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress">ip_address</a></code> | <code>str</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl">network_url</a></code> | <code>str</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port">port</a></code> | <code>str</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project">project</a></code> | <code>str</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region">region</a></code> | <code>str</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port"></a>

```python
port: str
```

- *Type:* str

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

### GoogleDnsRecordSetRoutingPolicyWrr <a name="GoogleDnsRecordSetRoutingPolicyWrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr(
  weight: typing.Union[int, float],
  health_checked_targets: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets = None,
  rrdatas: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The ratio of traffic routed to the target. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}. |

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ratio of traffic routed to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#weight GoogleDnsRecordSet#weight}

---

##### `health_checked_targets`<sup>Optional</sup> <a name="health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets"></a>

```python
health_checked_targets: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}.

---

### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets(
  external_endpoints: typing.List[str] = None,
  internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.externalEndpoints">external_endpoints</a></code> | <code>typing.List[str]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers">internal_load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | internal_load_balancers block. |

---

##### `external_endpoints`<sup>Optional</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.externalEndpoints"></a>

```python
external_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `internal_load_balancers`<sup>Optional</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers"></a>

```python
internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers(
  ip_address: str,
  ip_protocol: str,
  network_url: str,
  port: str,
  project: str,
  load_balancer_type: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">ip_address</a></code> | <code>str</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">network_url</a></code> | <code>str</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port">port</a></code> | <code>str</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project">project</a></code> | <code>str</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region">region</a></code> | <code>str</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```python
port: str
```

- *Type:* str

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---


### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType">reset_load_balancer_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_load_balancer_type` <a name="reset_load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```python
def reset_load_balancer_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]

---


### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">put_internal_load_balancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints">reset_external_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers">reset_internal_load_balancers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_load_balancers` <a name="put_internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```python
def put_internal_load_balancers(
  value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---

##### `reset_external_endpoints` <a name="reset_external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints"></a>

```python
def reset_external_endpoints() -> None
```

##### `reset_internal_load_balancers` <a name="reset_internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers"></a>

```python
def reset_internal_load_balancers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">internal_load_balancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput">external_endpoints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">internal_load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpoints">external_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```python
internal_load_balancers: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `external_endpoints_input`<sup>Optional</sup> <a name="external_endpoints_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput"></a>

```python
external_endpoints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_load_balancers_input`<sup>Optional</sup> <a name="internal_load_balancers_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```python
internal_load_balancers_input: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---

##### `external_endpoints`<sup>Required</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpoints"></a>

```python
external_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---


### GoogleDnsRecordSetRoutingPolicyGeoList <a name="GoogleDnsRecordSetRoutingPolicyGeoList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsRecordSetRoutingPolicyGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]]

---


### GoogleDnsRecordSetRoutingPolicyGeoOutputReference <a name="GoogleDnsRecordSetRoutingPolicyGeoOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets">put_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets">reset_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas">reset_rrdatas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_checked_targets` <a name="put_health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets"></a>

```python
def put_health_checked_targets(
  external_endpoints: typing.List[str] = None,
  internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers]] = None
) -> None
```

###### `external_endpoints`<sup>Optional</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets.parameter.externalEndpoints"></a>

- *Type:* typing.List[str]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

###### `internal_load_balancers`<sup>Optional</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets.parameter.internalLoadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

##### `reset_health_checked_targets` <a name="reset_health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets"></a>

```python
def reset_health_checked_targets() -> None
```

##### `reset_rrdatas` <a name="reset_rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas"></a>

```python
def reset_rrdatas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput">health_checked_targets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput">rrdatas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_checked_targets`<sup>Required</sup> <a name="health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets"></a>

```python
health_checked_targets: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a>

---

##### `health_checked_targets_input`<sup>Optional</sup> <a name="health_checked_targets_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput"></a>

```python
health_checked_targets_input: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `rrdatas_input`<sup>Optional</sup> <a name="rrdatas_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput"></a>

```python
rrdatas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsRecordSetRoutingPolicyGeo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]

---


### GoogleDnsRecordSetRoutingPolicyOutputReference <a name="GoogleDnsRecordSetRoutingPolicyOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putGeo">put_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup">put_primary_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putWrr">put_wrr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing">reset_enable_geo_fencing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup">reset_primary_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetWrr">reset_wrr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_geo` <a name="put_geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putGeo"></a>

```python
def put_geo(
  value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putGeo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]]

---

##### `put_primary_backup` <a name="put_primary_backup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup"></a>

```python
def put_primary_backup(
  backup_geo: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]],
  primary: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary,
  enable_geo_fencing_for_backups: typing.Union[bool, IResolvable] = None,
  trickle_ratio: typing.Union[int, float] = None
) -> None
```

###### `backup_geo`<sup>Required</sup> <a name="backup_geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.backupGeo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

backup_geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#backup_geo GoogleDnsRecordSet#backup_geo}

---

###### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.primary"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#primary GoogleDnsRecordSet#primary}

---

###### `enable_geo_fencing_for_backups`<sup>Optional</sup> <a name="enable_geo_fencing_for_backups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.enableGeoFencingForBackups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable fencing for backup geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#enable_geo_fencing_for_backups GoogleDnsRecordSet#enable_geo_fencing_for_backups}

---

###### `trickle_ratio`<sup>Optional</sup> <a name="trickle_ratio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.trickleRatio"></a>

- *Type:* typing.Union[int, float]

Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#trickle_ratio GoogleDnsRecordSet#trickle_ratio}

---

##### `put_wrr` <a name="put_wrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putWrr"></a>

```python
def put_wrr(
  value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrr]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putWrr.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]]

---

##### `reset_enable_geo_fencing` <a name="reset_enable_geo_fencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing"></a>

```python
def reset_enable_geo_fencing() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_primary_backup` <a name="reset_primary_backup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup"></a>

```python
def reset_primary_backup() -> None
```

##### `reset_wrr` <a name="reset_wrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetWrr"></a>

```python
def reset_wrr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geo">geo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList">GoogleDnsRecordSetRoutingPolicyGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackup">primary_backup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrr">wrr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList">GoogleDnsRecordSetRoutingPolicyWrrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput">enable_geo_fencing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geoInput">geo_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheckInput">health_check_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput">primary_backup_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrrInput">wrr_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing">enable_geo_fencing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheck">health_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geo"></a>

```python
geo: GoogleDnsRecordSetRoutingPolicyGeoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList">GoogleDnsRecordSetRoutingPolicyGeoList</a>

---

##### `primary_backup`<sup>Required</sup> <a name="primary_backup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackup"></a>

```python
primary_backup: GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a>

---

##### `wrr`<sup>Required</sup> <a name="wrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrr"></a>

```python
wrr: GoogleDnsRecordSetRoutingPolicyWrrList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList">GoogleDnsRecordSetRoutingPolicyWrrList</a>

---

##### `enable_geo_fencing_input`<sup>Optional</sup> <a name="enable_geo_fencing_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput"></a>

```python
enable_geo_fencing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geoInput"></a>

```python
geo_input: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>]]

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheckInput"></a>

```python
health_check_input: str
```

- *Type:* str

---

##### `primary_backup_input`<sup>Optional</sup> <a name="primary_backup_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput"></a>

```python
primary_backup_input: GoogleDnsRecordSetRoutingPolicyPrimaryBackup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

---

##### `wrr_input`<sup>Optional</sup> <a name="wrr_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrrInput"></a>

```python
wrr_input: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]]

---

##### `enable_geo_fencing`<sup>Required</sup> <a name="enable_geo_fencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing"></a>

```python
enable_geo_fencing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsRecordSetRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType">reset_load_balancer_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_load_balancer_type` <a name="reset_load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```python
def reset_load_balancer_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">put_internal_load_balancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints">reset_external_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers">reset_internal_load_balancers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_load_balancers` <a name="put_internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```python
def put_internal_load_balancers(
  value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---

##### `reset_external_endpoints` <a name="reset_external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints"></a>

```python
def reset_external_endpoints() -> None
```

##### `reset_internal_load_balancers` <a name="reset_internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers"></a>

```python
def reset_internal_load_balancers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">internal_load_balancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput">external_endpoints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">internal_load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpoints">external_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```python
internal_load_balancers: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `external_endpoints_input`<sup>Optional</sup> <a name="external_endpoints_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput"></a>

```python
external_endpoints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_load_balancers_input`<sup>Optional</sup> <a name="internal_load_balancers_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```python
internal_load_balancers_input: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

---

##### `external_endpoints`<sup>Required</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpoints"></a>

```python
external_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets">put_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets">reset_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas">reset_rrdatas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_checked_targets` <a name="put_health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets"></a>

```python
def put_health_checked_targets(
  external_endpoints: typing.List[str] = None,
  internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers]] = None
) -> None
```

###### `external_endpoints`<sup>Optional</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets.parameter.externalEndpoints"></a>

- *Type:* typing.List[str]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

###### `internal_load_balancers`<sup>Optional</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets.parameter.internalLoadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

##### `reset_health_checked_targets` <a name="reset_health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets"></a>

```python
def reset_health_checked_targets() -> None
```

##### `reset_rrdatas` <a name="reset_rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas"></a>

```python
def reset_rrdatas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput">health_checked_targets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput">rrdatas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_checked_targets`<sup>Required</sup> <a name="health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets"></a>

```python
health_checked_targets: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a>

---

##### `health_checked_targets_input`<sup>Optional</sup> <a name="health_checked_targets_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput"></a>

```python
health_checked_targets_input: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `rrdatas_input`<sup>Optional</sup> <a name="rrdatas_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput"></a>

```python
rrdatas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo">put_backup_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary">put_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups">reset_enable_geo_fencing_for_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio">reset_trickle_ratio</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_geo` <a name="put_backup_geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo"></a>

```python
def put_backup_geo(
  value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

---

##### `put_primary` <a name="put_primary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary"></a>

```python
def put_primary(
  external_endpoints: typing.List[str] = None,
  internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]] = None
) -> None
```

###### `external_endpoints`<sup>Optional</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary.parameter.externalEndpoints"></a>

- *Type:* typing.List[str]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

###### `internal_load_balancers`<sup>Optional</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary.parameter.internalLoadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

##### `reset_enable_geo_fencing_for_backups` <a name="reset_enable_geo_fencing_for_backups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups"></a>

```python
def reset_enable_geo_fencing_for_backups() -> None
```

##### `reset_trickle_ratio` <a name="reset_trickle_ratio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio"></a>

```python
def reset_trickle_ratio() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo">backup_geo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput">backup_geo_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput">enable_geo_fencing_for_backups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput">primary_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput">trickle_ratio_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups">enable_geo_fencing_for_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio">trickle_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_geo`<sup>Required</sup> <a name="backup_geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo"></a>

```python
backup_geo: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary"></a>

```python
primary: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a>

---

##### `backup_geo_input`<sup>Optional</sup> <a name="backup_geo_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput"></a>

```python
backup_geo_input: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>]]

---

##### `enable_geo_fencing_for_backups_input`<sup>Optional</sup> <a name="enable_geo_fencing_for_backups_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput"></a>

```python
enable_geo_fencing_for_backups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput"></a>

```python
primary_input: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---

##### `trickle_ratio_input`<sup>Optional</sup> <a name="trickle_ratio_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput"></a>

```python
trickle_ratio_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_geo_fencing_for_backups`<sup>Required</sup> <a name="enable_geo_fencing_for_backups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups"></a>

```python
enable_geo_fencing_for_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `trickle_ratio`<sup>Required</sup> <a name="trickle_ratio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio"></a>

```python
trickle_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsRecordSetRoutingPolicyPrimaryBackup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetLoadBalancerType">reset_load_balancer_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_load_balancer_type` <a name="reset_load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```python
def reset_load_balancer_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers">put_internal_load_balancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetExternalEndpoints">reset_external_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetInternalLoadBalancers">reset_internal_load_balancers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_load_balancers` <a name="put_internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers"></a>

```python
def put_internal_load_balancers(
  value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

---

##### `reset_external_endpoints` <a name="reset_external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetExternalEndpoints"></a>

```python
def reset_external_endpoints() -> None
```

##### `reset_internal_load_balancers` <a name="reset_internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetInternalLoadBalancers"></a>

```python
def reset_internal_load_balancers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers">internal_load_balancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpointsInput">external_endpoints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput">internal_load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpoints">external_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers"></a>

```python
internal_load_balancers: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a>

---

##### `external_endpoints_input`<sup>Optional</sup> <a name="external_endpoints_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpointsInput"></a>

```python
external_endpoints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_load_balancers_input`<sup>Optional</sup> <a name="internal_load_balancers_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput"></a>

```python
internal_load_balancers_input: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>]]

---

##### `external_endpoints`<sup>Required</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpoints"></a>

```python
external_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---


### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

---


### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType">reset_load_balancer_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_load_balancer_type` <a name="reset_load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```python
def reset_load_balancer_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]

---


### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers">put_internal_load_balancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetExternalEndpoints">reset_external_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetInternalLoadBalancers">reset_internal_load_balancers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_load_balancers` <a name="put_internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```python
def put_internal_load_balancers(
  value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

---

##### `reset_external_endpoints` <a name="reset_external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetExternalEndpoints"></a>

```python
def reset_external_endpoints() -> None
```

##### `reset_internal_load_balancers` <a name="reset_internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetInternalLoadBalancers"></a>

```python
def reset_internal_load_balancers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers">internal_load_balancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpointsInput">external_endpoints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">internal_load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpoints">external_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_load_balancers`<sup>Required</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```python
internal_load_balancers: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `external_endpoints_input`<sup>Optional</sup> <a name="external_endpoints_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpointsInput"></a>

```python
external_endpoints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_load_balancers_input`<sup>Optional</sup> <a name="internal_load_balancers_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```python
internal_load_balancers_input: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

---

##### `external_endpoints`<sup>Required</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpoints"></a>

```python
external_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---


### GoogleDnsRecordSetRoutingPolicyWrrList <a name="GoogleDnsRecordSetRoutingPolicyWrrList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsRecordSetRoutingPolicyWrrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]]

---


### GoogleDnsRecordSetRoutingPolicyWrrOutputReference <a name="GoogleDnsRecordSetRoutingPolicyWrrOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_record_set

googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets">put_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets">reset_health_checked_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas">reset_rrdatas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_checked_targets` <a name="put_health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets"></a>

```python
def put_health_checked_targets(
  external_endpoints: typing.List[str] = None,
  internal_load_balancers: typing.Union[IResolvable, typing.List[GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers]] = None
) -> None
```

###### `external_endpoints`<sup>Optional</sup> <a name="external_endpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets.parameter.externalEndpoints"></a>

- *Type:* typing.List[str]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

###### `internal_load_balancers`<sup>Optional</sup> <a name="internal_load_balancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets.parameter.internalLoadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>]]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

##### `reset_health_checked_targets` <a name="reset_health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets"></a>

```python
def reset_health_checked_targets() -> None
```

##### `reset_rrdatas` <a name="reset_rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas"></a>

```python
def reset_rrdatas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets">health_checked_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput">health_checked_targets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput">rrdatas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas">rrdatas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_checked_targets`<sup>Required</sup> <a name="health_checked_targets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets"></a>

```python
health_checked_targets: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a>

---

##### `health_checked_targets_input`<sup>Optional</sup> <a name="health_checked_targets_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput"></a>

```python
health_checked_targets_input: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---

##### `rrdatas_input`<sup>Optional</sup> <a name="rrdatas_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput"></a>

```python
rrdatas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas"></a>

```python
rrdatas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsRecordSetRoutingPolicyWrr]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>]

---



