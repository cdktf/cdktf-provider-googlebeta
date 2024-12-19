# `googleIapWebRegionBackendServiceIamMember` Submodule <a name="`googleIapWebRegionBackendServiceIamMember` Submodule" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebRegionBackendServiceIamMember <a name="GoogleIapWebRegionBackendServiceIamMember" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member google_iap_web_region_backend_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapwebregionbackendserviceiammember"

googleiapwebregionbackendserviceiammember.NewGoogleIapWebRegionBackendServiceIamMember(scope Construct, id *string, config GoogleIapWebRegionBackendServiceIamMemberConfig) GoogleIapWebRegionBackendServiceIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig">GoogleIapWebRegionBackendServiceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig">GoogleIapWebRegionBackendServiceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.putCondition"></a>

```go
func PutCondition(value GoogleIapWebRegionBackendServiceIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition">GoogleIapWebRegionBackendServiceIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapWebRegionBackendServiceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapwebregionbackendserviceiammember"

googleiapwebregionbackendserviceiammember.GoogleIapWebRegionBackendServiceIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapwebregionbackendserviceiammember"

googleiapwebregionbackendserviceiammember.GoogleIapWebRegionBackendServiceIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapwebregionbackendserviceiammember"

googleiapwebregionbackendserviceiammember.GoogleIapWebRegionBackendServiceIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapwebregionbackendserviceiammember"

googleiapwebregionbackendserviceiammember.GoogleIapWebRegionBackendServiceIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIapWebRegionBackendServiceIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIapWebRegionBackendServiceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIapWebRegionBackendServiceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapWebRegionBackendServiceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference">GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition">GoogleIapWebRegionBackendServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.webRegionBackendServiceInput">WebRegionBackendServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.webRegionBackendService">WebRegionBackendService</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.condition"></a>

```go
func Condition() GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference">GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleIapWebRegionBackendServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition">GoogleIapWebRegionBackendServiceIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `WebRegionBackendServiceInput`<sup>Optional</sup> <a name="WebRegionBackendServiceInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.webRegionBackendServiceInput"></a>

```go
func WebRegionBackendServiceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `WebRegionBackendService`<sup>Required</sup> <a name="WebRegionBackendService" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.webRegionBackendService"></a>

```go
func WebRegionBackendService() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebRegionBackendServiceIamMemberCondition <a name="GoogleIapWebRegionBackendServiceIamMemberCondition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapwebregionbackendserviceiammember"

&googleiapwebregionbackendserviceiammember.GoogleIapWebRegionBackendServiceIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#expression GoogleIapWebRegionBackendServiceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#title GoogleIapWebRegionBackendServiceIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#description GoogleIapWebRegionBackendServiceIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#expression GoogleIapWebRegionBackendServiceIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#title GoogleIapWebRegionBackendServiceIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#description GoogleIapWebRegionBackendServiceIamMember#description}.

---

### GoogleIapWebRegionBackendServiceIamMemberConfig <a name="GoogleIapWebRegionBackendServiceIamMemberConfig" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapwebregionbackendserviceiammember"

&googleiapwebregionbackendserviceiammember.GoogleIapWebRegionBackendServiceIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Member: *string,
	Role: *string,
	WebRegionBackendService: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#member GoogleIapWebRegionBackendServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#role GoogleIapWebRegionBackendServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.webRegionBackendService">WebRegionBackendService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#web_region_backend_service GoogleIapWebRegionBackendServiceIamMember#web_region_backend_service}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition">GoogleIapWebRegionBackendServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#id GoogleIapWebRegionBackendServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#project GoogleIapWebRegionBackendServiceIamMember#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#region GoogleIapWebRegionBackendServiceIamMember#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#member GoogleIapWebRegionBackendServiceIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#role GoogleIapWebRegionBackendServiceIamMember#role}.

---

##### `WebRegionBackendService`<sup>Required</sup> <a name="WebRegionBackendService" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.webRegionBackendService"></a>

```go
WebRegionBackendService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#web_region_backend_service GoogleIapWebRegionBackendServiceIamMember#web_region_backend_service}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.condition"></a>

```go
Condition GoogleIapWebRegionBackendServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition">GoogleIapWebRegionBackendServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#condition GoogleIapWebRegionBackendServiceIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#id GoogleIapWebRegionBackendServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#project GoogleIapWebRegionBackendServiceIamMember#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_web_region_backend_service_iam_member#region GoogleIapWebRegionBackendServiceIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference <a name="GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapwebregionbackendserviceiammember"

googleiapwebregionbackendserviceiammember.NewGoogleIapWebRegionBackendServiceIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition">GoogleIapWebRegionBackendServiceIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapWebRegionBackendServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamMember.GoogleIapWebRegionBackendServiceIamMemberCondition">GoogleIapWebRegionBackendServiceIamMemberCondition</a>

---



