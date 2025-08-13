# `googleFirebaseAppHostingDefaultDomain` Submodule <a name="`googleFirebaseAppHostingDefaultDomain` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppHostingDefaultDomain <a name="GoogleFirebaseAppHostingDefaultDomain" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain google_firebase_app_hosting_default_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingDefaultDomain(Construct Scope, string Id, GoogleFirebaseAppHostingDefaultDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig">GoogleFirebaseAppHostingDefaultDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig">GoogleFirebaseAppHostingDefaultDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFirebaseAppHostingDefaultDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts">GoogleFirebaseAppHostingDefaultDomainTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppHostingDefaultDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirebaseAppHostingDefaultDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirebaseAppHostingDefaultDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirebaseAppHostingDefaultDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirebaseAppHostingDefaultDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleFirebaseAppHostingDefaultDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAppHostingDefaultDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAppHostingDefaultDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppHostingDefaultDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference">GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.timeouts"></a>

```csharp
public GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference">GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppHostingDefaultDomainConfig <a name="GoogleFirebaseAppHostingDefaultDomainConfig" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingDefaultDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string DomainId,
    string Location,
    object Disabled = null,
    string Id = null,
    string Project = null,
    GoogleFirebaseAppHostingDefaultDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.backend">Backend</a></code> | <code>string</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.domainId">DomainId</a></code> | <code>string</code> | Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.location">Location</a></code> | <code>string</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the domain is disabled. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#id GoogleFirebaseAppHostingDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#project GoogleFirebaseAppHostingDefaultDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts">GoogleFirebaseAppHostingDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#backend GoogleFirebaseAppHostingDefaultDomain#backend}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#domain_id GoogleFirebaseAppHostingDefaultDomain#domain_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#location GoogleFirebaseAppHostingDefaultDomain#location}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the domain is disabled. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#disabled GoogleFirebaseAppHostingDefaultDomain#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#id GoogleFirebaseAppHostingDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#project GoogleFirebaseAppHostingDefaultDomain#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.timeouts"></a>

```csharp
public GoogleFirebaseAppHostingDefaultDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts">GoogleFirebaseAppHostingDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#timeouts GoogleFirebaseAppHostingDefaultDomain#timeouts}

---

### GoogleFirebaseAppHostingDefaultDomainTimeouts <a name="GoogleFirebaseAppHostingDefaultDomainTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingDefaultDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#create GoogleFirebaseAppHostingDefaultDomain#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#delete GoogleFirebaseAppHostingDefaultDomain#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#update GoogleFirebaseAppHostingDefaultDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#create GoogleFirebaseAppHostingDefaultDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#delete GoogleFirebaseAppHostingDefaultDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_firebase_app_hosting_default_domain#update GoogleFirebaseAppHostingDefaultDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference <a name="GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



