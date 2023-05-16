# `google_vertex_ai_featurestore_entitytype_iam_member`

Refer to the Terraform Registory for docs: [`google_vertex_ai_featurestore_entitytype_iam_member`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member).

# `googleVertexAiFeaturestoreEntitytypeIamMember` Submodule <a name="`googleVertexAiFeaturestoreEntitytypeIamMember` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestoreEntitytypeIamMember <a name="GoogleVertexAiFeaturestoreEntitytypeIamMember" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member google_vertex_ai_featurestore_entitytype_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googlevertexaifeaturestoreentitytypeiammember"

googlevertexaifeaturestoreentitytypeiammember.NewGoogleVertexAiFeaturestoreEntitytypeIamMember(scope Construct, id *string, config GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig) GoogleVertexAiFeaturestoreEntitytypeIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig">GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig">GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.putCondition"></a>

```go
func PutCondition(value GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googlevertexaifeaturestoreentitytypeiammember"

googlevertexaifeaturestoreentitytypeiammember.GoogleVertexAiFeaturestoreEntitytypeIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googlevertexaifeaturestoreentitytypeiammember"

googlevertexaifeaturestoreentitytypeiammember.GoogleVertexAiFeaturestoreEntitytypeIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googlevertexaifeaturestoreentitytypeiammember"

googlevertexaifeaturestoreentitytypeiammember.GoogleVertexAiFeaturestoreEntitytypeIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference">GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.entitytypeInput">EntitytypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.featurestoreInput">FeaturestoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.entitytype">Entitytype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.featurestore">Featurestore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.condition"></a>

```go
func Condition() GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference">GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a>

---

##### `EntitytypeInput`<sup>Optional</sup> <a name="EntitytypeInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.entitytypeInput"></a>

```go
func EntitytypeInput() *string
```

- *Type:* *string

---

##### `FeaturestoreInput`<sup>Optional</sup> <a name="FeaturestoreInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.featurestoreInput"></a>

```go
func FeaturestoreInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Entitytype`<sup>Required</sup> <a name="Entitytype" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.entitytype"></a>

```go
func Entitytype() *string
```

- *Type:* *string

---

##### `Featurestore`<sup>Required</sup> <a name="Featurestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.featurestore"></a>

```go
func Featurestore() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition <a name="GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googlevertexaifeaturestoreentitytypeiammember"

&googlevertexaifeaturestoreentitytypeiammember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#expression GoogleVertexAiFeaturestoreEntitytypeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#title GoogleVertexAiFeaturestoreEntitytypeIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#description GoogleVertexAiFeaturestoreEntitytypeIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#expression GoogleVertexAiFeaturestoreEntitytypeIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#title GoogleVertexAiFeaturestoreEntitytypeIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#description GoogleVertexAiFeaturestoreEntitytypeIamMember#description}.

---

### GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig <a name="GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googlevertexaifeaturestoreentitytypeiammember"

&googlevertexaifeaturestoreentitytypeiammember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Entitytype: *string,
	Featurestore: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.entitytype">Entitytype</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#entitytype GoogleVertexAiFeaturestoreEntitytypeIamMember#entitytype}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.featurestore">Featurestore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#featurestore GoogleVertexAiFeaturestoreEntitytypeIamMember#featurestore}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#member GoogleVertexAiFeaturestoreEntitytypeIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#role GoogleVertexAiFeaturestoreEntitytypeIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#id GoogleVertexAiFeaturestoreEntitytypeIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Entitytype`<sup>Required</sup> <a name="Entitytype" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.entitytype"></a>

```go
Entitytype *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#entitytype GoogleVertexAiFeaturestoreEntitytypeIamMember#entitytype}.

---

##### `Featurestore`<sup>Required</sup> <a name="Featurestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.featurestore"></a>

```go
Featurestore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#featurestore GoogleVertexAiFeaturestoreEntitytypeIamMember#featurestore}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#member GoogleVertexAiFeaturestoreEntitytypeIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#role GoogleVertexAiFeaturestoreEntitytypeIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.condition"></a>

```go
Condition GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#condition GoogleVertexAiFeaturestoreEntitytypeIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#id GoogleVertexAiFeaturestoreEntitytypeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googlevertexaifeaturestoreentitytypeiammember"

googlevertexaifeaturestoreentitytypeiammember.NewGoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a>

---



