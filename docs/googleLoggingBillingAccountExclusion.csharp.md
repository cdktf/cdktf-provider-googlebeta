# `googleLoggingBillingAccountExclusion` Submodule <a name="`googleLoggingBillingAccountExclusion` Submodule" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingBillingAccountExclusion <a name="GoogleLoggingBillingAccountExclusion" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion google_logging_billing_account_exclusion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleLoggingBillingAccountExclusion(Construct Scope, string Id, GoogleLoggingBillingAccountExclusionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig">GoogleLoggingBillingAccountExclusionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig">GoogleLoggingBillingAccountExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingBillingAccountExclusion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleLoggingBillingAccountExclusion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleLoggingBillingAccountExclusion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleLoggingBillingAccountExclusion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleLoggingBillingAccountExclusion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleLoggingBillingAccountExclusion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingBillingAccountExclusion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingBillingAccountExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingBillingAccountExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.billingAccountInput">BillingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.billingAccount">BillingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.billingAccountInput"></a>

```csharp
public string BillingAccountInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.billingAccount"></a>

```csharp
public string BillingAccount { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingBillingAccountExclusionConfig <a name="GoogleLoggingBillingAccountExclusionConfig" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleLoggingBillingAccountExclusionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BillingAccount,
    string Filter,
    string Name,
    string Description = null,
    object Disabled = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.billingAccount">BillingAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion#billing_account GoogleLoggingBillingAccountExclusion#billing_account}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.filter">Filter</a></code> | <code>string</code> | The filter to apply when excluding logs. Only log entries that match the filter are excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.name">Name</a></code> | <code>string</code> | The name of the logging exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether this exclusion rule should be disabled or not. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion#id GoogleLoggingBillingAccountExclusion#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.billingAccount"></a>

```csharp
public string BillingAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion#billing_account GoogleLoggingBillingAccountExclusion#billing_account}.

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter to apply when excluding logs. Only log entries that match the filter are excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion#filter GoogleLoggingBillingAccountExclusion#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the logging exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion#name GoogleLoggingBillingAccountExclusion#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion#description GoogleLoggingBillingAccountExclusion#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether this exclusion rule should be disabled or not. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion#disabled GoogleLoggingBillingAccountExclusion#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_logging_billing_account_exclusion#id GoogleLoggingBillingAccountExclusion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



