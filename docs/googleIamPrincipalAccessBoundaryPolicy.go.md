# `googleIamPrincipalAccessBoundaryPolicy` Submodule <a name="`googleIamPrincipalAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamPrincipalAccessBoundaryPolicy <a name="GoogleIamPrincipalAccessBoundaryPolicy" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

googleiamprincipalaccessboundarypolicy.NewGoogleIamPrincipalAccessBoundaryPolicy(scope Construct, id *string, config GoogleIamPrincipalAccessBoundaryPolicyConfig) GoogleIamPrincipalAccessBoundaryPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig">GoogleIamPrincipalAccessBoundaryPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig">GoogleIamPrincipalAccessBoundaryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails"></a>

```go
func PutDetails(value GoogleIamPrincipalAccessBoundaryPolicyDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIamPrincipalAccessBoundaryPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDetails"></a>

```go
func ResetDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

googleiamprincipalaccessboundarypolicy.GoogleIamPrincipalAccessBoundaryPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

googleiamprincipalaccessboundarypolicy.GoogleIamPrincipalAccessBoundaryPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

googleiamprincipalaccessboundarypolicy.GoogleIamPrincipalAccessBoundaryPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

googleiamprincipalaccessboundarypolicy.GoogleIamPrincipalAccessBoundaryPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamPrincipalAccessBoundaryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamPrincipalAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamPrincipalAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput">PrincipalAccessBoundaryPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId">PrincipalAccessBoundaryPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.details"></a>

```go
func Details() GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.detailsInput"></a>

```go
func DetailsInput() GoogleIamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PrincipalAccessBoundaryPolicyIdInput`<sup>Optional</sup> <a name="PrincipalAccessBoundaryPolicyIdInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput"></a>

```go
func PrincipalAccessBoundaryPolicyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PrincipalAccessBoundaryPolicyId`<sup>Required</sup> <a name="PrincipalAccessBoundaryPolicyId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId"></a>

```go
func PrincipalAccessBoundaryPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamPrincipalAccessBoundaryPolicyConfig <a name="GoogleIamPrincipalAccessBoundaryPolicyConfig" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

&googleiamprincipalaccessboundarypolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Organization: *string,
	PrincipalAccessBoundaryPolicyId: *string,
	Annotations: *map[string]*string,
	Details: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails,
	DisplayName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.organization">Organization</a></code> | <code>*string</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId">PrincipalAccessBoundaryPolicyId</a></code> | <code>*string</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#location GoogleIamPrincipalAccessBoundaryPolicy#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#organization GoogleIamPrincipalAccessBoundaryPolicy#organization}

---

##### `PrincipalAccessBoundaryPolicyId`<sup>Required</sup> <a name="PrincipalAccessBoundaryPolicyId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId"></a>

```go
PrincipalAccessBoundaryPolicyId *string
```

- *Type:* *string

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#principal_access_boundary_policy_id GoogleIamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#annotations GoogleIamPrincipalAccessBoundaryPolicy#annotations}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.details"></a>

```go
Details GoogleIamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#details GoogleIamPrincipalAccessBoundaryPolicy#details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#display_name GoogleIamPrincipalAccessBoundaryPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleIamPrincipalAccessBoundaryPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#timeouts GoogleIamPrincipalAccessBoundaryPolicy#timeouts}

---

### GoogleIamPrincipalAccessBoundaryPolicyDetails <a name="GoogleIamPrincipalAccessBoundaryPolicyDetails" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

&googleiamprincipalaccessboundarypolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails {
	Rules: interface{},
	EnforcementVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion">EnforcementVersion</a></code> | <code>*string</code> | The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#rules GoogleIamPrincipalAccessBoundaryPolicy#rules}

---

##### `EnforcementVersion`<sup>Optional</sup> <a name="EnforcementVersion" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion"></a>

```go
EnforcementVersion *string
```

- *Type:* *string

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#enforcement_version GoogleIamPrincipalAccessBoundaryPolicy#enforcement_version}

---

### GoogleIamPrincipalAccessBoundaryPolicyDetailsRules <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

&googleiamprincipalaccessboundarypolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules {
	Effect: *string,
	Resources: *[]*string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.effect">Effect</a></code> | <code>*string</code> | The access relationship of principals to the resources in this rule. Possible values: ALLOW. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of Cloud Resource Manager resources. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.description">Description</a></code> | <code>*string</code> | The description of the principal access boundary policy rule. Must be less than or equal to 256 characters. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

The access relationship of principals to the resources in this rule. Possible values: ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#effect GoogleIamPrincipalAccessBoundaryPolicy#effect}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of Cloud Resource Manager resources.

The resource
and all the descendants are included. The number of resources in a policy
is limited to 500 across all rules.
The following resource types are supported:

* Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
* Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
* Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
  or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#resources GoogleIamPrincipalAccessBoundaryPolicy#resources}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#description GoogleIamPrincipalAccessBoundaryPolicy#description}

---

### GoogleIamPrincipalAccessBoundaryPolicyTimeouts <a name="GoogleIamPrincipalAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

&googleiamprincipalaccessboundarypolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

googleiamprincipalaccessboundarypolicy.NewGoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion">ResetEnforcementVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnforcementVersion` <a name="ResetEnforcementVersion" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion"></a>

```go
func ResetEnforcementVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList">GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput">EnforcementVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion">EnforcementVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules"></a>

```go
func Rules() GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList">GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList</a>

---

##### `EnforcementVersionInput`<sup>Optional</sup> <a name="EnforcementVersionInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput"></a>

```go
func EnforcementVersionInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `EnforcementVersion`<sup>Required</sup> <a name="EnforcementVersion" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion"></a>

```go
func EnforcementVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---


### GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

googleiamprincipalaccessboundarypolicy.NewGoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get"></a>

```go
func Get(index *f64) GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

googleiamprincipalaccessboundarypolicy.NewGoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamprincipalaccessboundarypolicy"

googleiamprincipalaccessboundarypolicy.NewGoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



