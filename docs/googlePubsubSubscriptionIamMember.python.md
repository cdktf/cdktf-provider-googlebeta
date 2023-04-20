# `google_pubsub_subscription_iam_member`

Refer to the Terraform Registory for docs: [`google_pubsub_subscription_iam_member`](https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member).

# `googlePubsubSubscriptionIamMember` Submodule <a name="`googlePubsubSubscriptionIamMember` Submodule" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubSubscriptionIamMember <a name="GooglePubsubSubscriptionIamMember" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member google_pubsub_subscription_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_subscription_iam_member

googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  role: str,
  subscription: str,
  condition: GooglePubsubSubscriptionIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#member GooglePubsubSubscriptionIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#role GooglePubsubSubscriptionIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.subscription">subscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#subscription GooglePubsubSubscriptionIamMember#subscription}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition">GooglePubsubSubscriptionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#id GooglePubsubSubscriptionIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#project GooglePubsubSubscriptionIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#member GooglePubsubSubscriptionIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#role GooglePubsubSubscriptionIamMember#role}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.subscription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#subscription GooglePubsubSubscriptionIamMember#subscription}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition">GooglePubsubSubscriptionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#condition GooglePubsubSubscriptionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#id GooglePubsubSubscriptionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#project GooglePubsubSubscriptionIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#expression GooglePubsubSubscriptionIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#title GooglePubsubSubscriptionIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#description GooglePubsubSubscriptionIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_subscription_iam_member

googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_subscription_iam_member

googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_subscription_iam_member

googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference">GooglePubsubSubscriptionIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition">GooglePubsubSubscriptionIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.subscriptionInput">subscription_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.subscription">subscription</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.condition"></a>

```python
condition: GooglePubsubSubscriptionIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference">GooglePubsubSubscriptionIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.conditionInput"></a>

```python
condition_input: GooglePubsubSubscriptionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition">GooglePubsubSubscriptionIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `subscription_input`<sup>Optional</sup> <a name="subscription_input" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.subscriptionInput"></a>

```python
subscription_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.subscription"></a>

```python
subscription: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubSubscriptionIamMemberCondition <a name="GooglePubsubSubscriptionIamMemberCondition" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_subscription_iam_member

googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#expression GooglePubsubSubscriptionIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#title GooglePubsubSubscriptionIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#description GooglePubsubSubscriptionIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#expression GooglePubsubSubscriptionIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#title GooglePubsubSubscriptionIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#description GooglePubsubSubscriptionIamMember#description}.

---

### GooglePubsubSubscriptionIamMemberConfig <a name="GooglePubsubSubscriptionIamMemberConfig" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_subscription_iam_member

googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  role: str,
  subscription: str,
  condition: GooglePubsubSubscriptionIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#member GooglePubsubSubscriptionIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#role GooglePubsubSubscriptionIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.subscription">subscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#subscription GooglePubsubSubscriptionIamMember#subscription}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition">GooglePubsubSubscriptionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#id GooglePubsubSubscriptionIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#project GooglePubsubSubscriptionIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#member GooglePubsubSubscriptionIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#role GooglePubsubSubscriptionIamMember#role}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.subscription"></a>

```python
subscription: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#subscription GooglePubsubSubscriptionIamMember#subscription}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.condition"></a>

```python
condition: GooglePubsubSubscriptionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition">GooglePubsubSubscriptionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#condition GooglePubsubSubscriptionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#id GooglePubsubSubscriptionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_pubsub_subscription_iam_member#project GooglePubsubSubscriptionIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubSubscriptionIamMemberConditionOutputReference <a name="GooglePubsubSubscriptionIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_subscription_iam_member

googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition">GooglePubsubSubscriptionIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GooglePubsubSubscriptionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscriptionIamMember.GooglePubsubSubscriptionIamMemberCondition">GooglePubsubSubscriptionIamMemberCondition</a>

---



