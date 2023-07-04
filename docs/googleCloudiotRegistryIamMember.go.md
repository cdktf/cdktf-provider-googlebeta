# `google_cloudiot_registry_iam_member`

Refer to the Terraform Registory for docs: [`google_cloudiot_registry_iam_member`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member).

# `googleCloudiotRegistryIamMember` Submodule <a name="`googleCloudiotRegistryIamMember` Submodule" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudiotRegistryIamMember <a name="GoogleCloudiotRegistryIamMember" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member google_cloudiot_registry_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecloudiotregistryiammember"

googlecloudiotregistryiammember.NewGoogleCloudiotRegistryIamMember(scope Construct, id *string, config GoogleCloudiotRegistryIamMemberConfig) GoogleCloudiotRegistryIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig">GoogleCloudiotRegistryIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig">GoogleCloudiotRegistryIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.putCondition"></a>

```go
func PutCondition(value GoogleCloudiotRegistryIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition">GoogleCloudiotRegistryIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecloudiotregistryiammember"

googlecloudiotregistryiammember.GoogleCloudiotRegistryIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecloudiotregistryiammember"

googlecloudiotregistryiammember.GoogleCloudiotRegistryIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecloudiotregistryiammember"

googlecloudiotregistryiammember.GoogleCloudiotRegistryIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference">GoogleCloudiotRegistryIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition">GoogleCloudiotRegistryIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.condition"></a>

```go
func Condition() GoogleCloudiotRegistryIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference">GoogleCloudiotRegistryIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleCloudiotRegistryIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition">GoogleCloudiotRegistryIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudiotRegistryIamMemberCondition <a name="GoogleCloudiotRegistryIamMemberCondition" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecloudiotregistryiammember"

&googlecloudiotregistryiammember.GoogleCloudiotRegistryIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#expression GoogleCloudiotRegistryIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#title GoogleCloudiotRegistryIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#description GoogleCloudiotRegistryIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#expression GoogleCloudiotRegistryIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#title GoogleCloudiotRegistryIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#description GoogleCloudiotRegistryIamMember#description}.

---

### GoogleCloudiotRegistryIamMemberConfig <a name="GoogleCloudiotRegistryIamMemberConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecloudiotregistryiammember"

&googlecloudiotregistryiammember.GoogleCloudiotRegistryIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Member: *string,
	Name: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#member GoogleCloudiotRegistryIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#name GoogleCloudiotRegistryIamMember#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#role GoogleCloudiotRegistryIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition">GoogleCloudiotRegistryIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#id GoogleCloudiotRegistryIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#project GoogleCloudiotRegistryIamMember#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#region GoogleCloudiotRegistryIamMember#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#member GoogleCloudiotRegistryIamMember#member}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#name GoogleCloudiotRegistryIamMember#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#role GoogleCloudiotRegistryIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.condition"></a>

```go
Condition GoogleCloudiotRegistryIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition">GoogleCloudiotRegistryIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#condition GoogleCloudiotRegistryIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#id GoogleCloudiotRegistryIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#project GoogleCloudiotRegistryIamMember#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_cloudiot_registry_iam_member#region GoogleCloudiotRegistryIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudiotRegistryIamMemberConditionOutputReference <a name="GoogleCloudiotRegistryIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecloudiotregistryiammember"

googlecloudiotregistryiammember.NewGoogleCloudiotRegistryIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudiotRegistryIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition">GoogleCloudiotRegistryIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudiotRegistryIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistryIamMember.GoogleCloudiotRegistryIamMemberCondition">GoogleCloudiotRegistryIamMemberCondition</a>

---



