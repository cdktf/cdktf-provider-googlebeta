# `googleComputeOrganizationSecurityPolicyAssociation` Submodule <a name="`googleComputeOrganizationSecurityPolicyAssociation` Submodule" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSecurityPolicyAssociation <a name="GoogleComputeOrganizationSecurityPolicyAssociation" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association google_compute_organization_security_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeorganizationsecuritypolicyassociation"

googlecomputeorganizationsecuritypolicyassociation.NewGoogleComputeOrganizationSecurityPolicyAssociation(scope Construct, id *string, config GoogleComputeOrganizationSecurityPolicyAssociationConfig) GoogleComputeOrganizationSecurityPolicyAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig">GoogleComputeOrganizationSecurityPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig">GoogleComputeOrganizationSecurityPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeOrganizationSecurityPolicyAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeOrganizationSecurityPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeorganizationsecuritypolicyassociation"

googlecomputeorganizationsecuritypolicyassociation.GoogleComputeOrganizationSecurityPolicyAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeorganizationsecuritypolicyassociation"

googlecomputeorganizationsecuritypolicyassociation.GoogleComputeOrganizationSecurityPolicyAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeorganizationsecuritypolicyassociation"

googlecomputeorganizationsecuritypolicyassociation.GoogleComputeOrganizationSecurityPolicyAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeorganizationsecuritypolicyassociation"

googlecomputeorganizationsecuritypolicyassociation.GoogleComputeOrganizationSecurityPolicyAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeOrganizationSecurityPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeOrganizationSecurityPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeOrganizationSecurityPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSecurityPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.attachmentIdInput">AttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.timeouts"></a>

```go
func Timeouts() GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference</a>

---

##### `AttachmentIdInput`<sup>Optional</sup> <a name="AttachmentIdInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.attachmentIdInput"></a>

```go
func AttachmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSecurityPolicyAssociationConfig <a name="GoogleComputeOrganizationSecurityPolicyAssociationConfig" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeorganizationsecuritypolicyassociation"

&googlecomputeorganizationsecuritypolicyassociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentId: *string,
	Name: *string,
	PolicyId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | The resource that the security policy is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.name">Name</a></code> | <code>*string</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | The security policy ID of the association. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#id GoogleComputeOrganizationSecurityPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.attachmentId"></a>

```go
AttachmentId *string
```

- *Type:* *string

The resource that the security policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#attachment_id GoogleComputeOrganizationSecurityPolicyAssociation#attachment_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#name GoogleComputeOrganizationSecurityPolicyAssociation#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

The security policy ID of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#policy_id GoogleComputeOrganizationSecurityPolicyAssociation#policy_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#id GoogleComputeOrganizationSecurityPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeOrganizationSecurityPolicyAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#timeouts GoogleComputeOrganizationSecurityPolicyAssociation#timeouts}

---

### GoogleComputeOrganizationSecurityPolicyAssociationTimeouts <a name="GoogleComputeOrganizationSecurityPolicyAssociationTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeorganizationsecuritypolicyassociation"

&googlecomputeorganizationsecuritypolicyassociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#create GoogleComputeOrganizationSecurityPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#delete GoogleComputeOrganizationSecurityPolicyAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#create GoogleComputeOrganizationSecurityPolicyAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_organization_security_policy_association#delete GoogleComputeOrganizationSecurityPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeorganizationsecuritypolicyassociation"

googlecomputeorganizationsecuritypolicyassociation.NewGoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



