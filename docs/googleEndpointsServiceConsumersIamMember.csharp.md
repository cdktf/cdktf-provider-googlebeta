# `googleEndpointsServiceConsumersIamMember` Submodule <a name="`googleEndpointsServiceConsumersIamMember` Submodule" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEndpointsServiceConsumersIamMember <a name="GoogleEndpointsServiceConsumersIamMember" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member google_endpoints_service_consumers_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEndpointsServiceConsumersIamMember(Construct Scope, string Id, GoogleEndpointsServiceConsumersIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig">GoogleEndpointsServiceConsumersIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig">GoogleEndpointsServiceConsumersIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleEndpointsServiceConsumersIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEndpointsServiceConsumersIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEndpointsServiceConsumersIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEndpointsServiceConsumersIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEndpointsServiceConsumersIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEndpointsServiceConsumersIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleEndpointsServiceConsumersIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEndpointsServiceConsumersIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEndpointsServiceConsumersIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEndpointsServiceConsumersIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference">GoogleEndpointsServiceConsumersIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.consumerProjectInput">ConsumerProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.consumerProject">ConsumerProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.condition"></a>

```csharp
public GoogleEndpointsServiceConsumersIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference">GoogleEndpointsServiceConsumersIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.conditionInput"></a>

```csharp
public GoogleEndpointsServiceConsumersIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a>

---

##### `ConsumerProjectInput`<sup>Optional</sup> <a name="ConsumerProjectInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.consumerProjectInput"></a>

```csharp
public string ConsumerProjectInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.consumerProject"></a>

```csharp
public string ConsumerProject { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEndpointsServiceConsumersIamMemberCondition <a name="GoogleEndpointsServiceConsumersIamMemberCondition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEndpointsServiceConsumersIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#expression GoogleEndpointsServiceConsumersIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#title GoogleEndpointsServiceConsumersIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#description GoogleEndpointsServiceConsumersIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#expression GoogleEndpointsServiceConsumersIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#title GoogleEndpointsServiceConsumersIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#description GoogleEndpointsServiceConsumersIamMember#description}.

---

### GoogleEndpointsServiceConsumersIamMemberConfig <a name="GoogleEndpointsServiceConsumersIamMemberConfig" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEndpointsServiceConsumersIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConsumerProject,
    string Member,
    string Role,
    string ServiceName,
    GoogleEndpointsServiceConsumersIamMemberCondition Condition = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.consumerProject">ConsumerProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#consumer_project GoogleEndpointsServiceConsumersIamMember#consumer_project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#member GoogleEndpointsServiceConsumersIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#role GoogleEndpointsServiceConsumersIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#service_name GoogleEndpointsServiceConsumersIamMember#service_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#id GoogleEndpointsServiceConsumersIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.consumerProject"></a>

```csharp
public string ConsumerProject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#consumer_project GoogleEndpointsServiceConsumersIamMember#consumer_project}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#member GoogleEndpointsServiceConsumersIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#role GoogleEndpointsServiceConsumersIamMember#role}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#service_name GoogleEndpointsServiceConsumersIamMember#service_name}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.condition"></a>

```csharp
public GoogleEndpointsServiceConsumersIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#condition GoogleEndpointsServiceConsumersIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_endpoints_service_consumers_iam_member#id GoogleEndpointsServiceConsumersIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEndpointsServiceConsumersIamMemberConditionOutputReference <a name="GoogleEndpointsServiceConsumersIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEndpointsServiceConsumersIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleEndpointsServiceConsumersIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a>

---



