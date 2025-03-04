# `googleOrganizationIamAuditConfig` Submodule <a name="`googleOrganizationIamAuditConfig` Submodule" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationIamAuditConfig <a name="GoogleOrganizationIamAuditConfig" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_organization_iam_audit_config google_organization_iam_audit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleorganizationiamauditconfig"

googleorganizationiamauditconfig.NewGoogleOrganizationIamAuditConfig(scope Construct, id *string, config GoogleOrganizationIamAuditConfigConfig) GoogleOrganizationIamAuditConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig">GoogleOrganizationIamAuditConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig">GoogleOrganizationIamAuditConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.putAuditLogConfig">PutAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuditLogConfig` <a name="PutAuditLogConfig" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.putAuditLogConfig"></a>

```go
func PutAuditLogConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.putAuditLogConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOrganizationIamAuditConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleorganizationiamauditconfig"

googleorganizationiamauditconfig.GoogleOrganizationIamAuditConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleorganizationiamauditconfig"

googleorganizationiamauditconfig.GoogleOrganizationIamAuditConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleorganizationiamauditconfig"

googleorganizationiamauditconfig.GoogleOrganizationIamAuditConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleorganizationiamauditconfig"

googleorganizationiamauditconfig.GoogleOrganizationIamAuditConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleOrganizationIamAuditConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOrganizationIamAuditConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOrganizationIamAuditConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_organization_iam_audit_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationIamAuditConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList">GoogleOrganizationIamAuditConfigAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.auditLogConfigInput">AuditLogConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.auditLogConfig"></a>

```go
func AuditLogConfig() GoogleOrganizationIamAuditConfigAuditLogConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList">GoogleOrganizationIamAuditConfigAuditLogConfigList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `AuditLogConfigInput`<sup>Optional</sup> <a name="AuditLogConfigInput" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.auditLogConfigInput"></a>

```go
func AuditLogConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationIamAuditConfigAuditLogConfig <a name="GoogleOrganizationIamAuditConfigAuditLogConfig" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleorganizationiamauditconfig"

&googleorganizationiamauditconfig.GoogleOrganizationIamAuditConfigAuditLogConfig {
	LogType: *string,
	ExemptedMembers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.property.logType">LogType</a></code> | <code>*string</code> | Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.property.exemptedMembers">ExemptedMembers</a></code> | <code>*[]*string</code> | Identities that do not cause logging for this type of permission. |

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_organization_iam_audit_config#log_type GoogleOrganizationIamAuditConfig#log_type}

---

##### `ExemptedMembers`<sup>Optional</sup> <a name="ExemptedMembers" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.property.exemptedMembers"></a>

```go
ExemptedMembers *[]*string
```

- *Type:* *[]*string

Identities that do not cause logging for this type of permission.

Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_organization_iam_audit_config#exempted_members GoogleOrganizationIamAuditConfig#exempted_members}

---

### GoogleOrganizationIamAuditConfigConfig <a name="GoogleOrganizationIamAuditConfigConfig" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleorganizationiamauditconfig"

&googleorganizationiamauditconfig.GoogleOrganizationIamAuditConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuditLogConfig: interface{},
	OrgId: *string,
	Service: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code>interface{}</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The numeric ID of the organization in which you want to manage the audit logging config. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.service">Service</a></code> | <code>*string</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_organization_iam_audit_config#id GoogleOrganizationIamAuditConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.auditLogConfig"></a>

```go
AuditLogConfig interface{}
```

- *Type:* interface{}

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_organization_iam_audit_config#audit_log_config GoogleOrganizationIamAuditConfig#audit_log_config}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The numeric ID of the organization in which you want to manage the audit logging config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_organization_iam_audit_config#org_id GoogleOrganizationIamAuditConfig#org_id}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_organization_iam_audit_config#service GoogleOrganizationIamAuditConfig#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_organization_iam_audit_config#id GoogleOrganizationIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrganizationIamAuditConfigAuditLogConfigList <a name="GoogleOrganizationIamAuditConfigAuditLogConfigList" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleorganizationiamauditconfig"

googleorganizationiamauditconfig.NewGoogleOrganizationIamAuditConfigAuditLogConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOrganizationIamAuditConfigAuditLogConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.get"></a>

```go
func Get(index *f64) GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference <a name="GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleorganizationiamauditconfig"

googleorganizationiamauditconfig.NewGoogleOrganizationIamAuditConfigAuditLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers">ResetExemptedMembers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExemptedMembers` <a name="ResetExemptedMembers" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers"></a>

```go
func ResetExemptedMembers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput">ExemptedMembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers">ExemptedMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExemptedMembersInput`<sup>Optional</sup> <a name="ExemptedMembersInput" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput"></a>

```go
func ExemptedMembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `ExemptedMembers`<sup>Required</sup> <a name="ExemptedMembers" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers"></a>

```go
func ExemptedMembers() *[]*string
```

- *Type:* *[]*string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



