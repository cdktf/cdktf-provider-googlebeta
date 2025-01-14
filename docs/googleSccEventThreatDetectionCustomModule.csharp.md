# `googleSccEventThreatDetectionCustomModule` Submodule <a name="`googleSccEventThreatDetectionCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccEventThreatDetectionCustomModule <a name="GoogleSccEventThreatDetectionCustomModule" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module google_scc_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccEventThreatDetectionCustomModule(Construct Scope, string Id, GoogleSccEventThreatDetectionCustomModuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig">GoogleSccEventThreatDetectionCustomModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig">GoogleSccEventThreatDetectionCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSccEventThreatDetectionCustomModuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccEventThreatDetectionCustomModule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccEventThreatDetectionCustomModule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccEventThreatDetectionCustomModule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccEventThreatDetectionCustomModule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccEventThreatDetectionCustomModule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor">LastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput">ConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput">EnablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config">Config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState">EnablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor"></a>

```csharp
public string LastEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts"></a>

```csharp
public GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput"></a>

```csharp
public string ConfigInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnablementStateInput`<sup>Optional</sup> <a name="EnablementStateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```csharp
public string EnablementStateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config"></a>

```csharp
public string Config { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState"></a>

```csharp
public string EnablementState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccEventThreatDetectionCustomModuleConfig <a name="GoogleSccEventThreatDetectionCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccEventThreatDetectionCustomModuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Config,
    string EnablementState,
    string Organization,
    string Type,
    string DisplayName = null,
    string Id = null,
    GoogleSccEventThreatDetectionCustomModuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config">Config</a></code> | <code>string</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState">EnablementState</a></code> | <code>string</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization">Organization</a></code> | <code>string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type">Type</a></code> | <code>string</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config"></a>

```csharp
public string Config { get; set; }
```

- *Type:* string

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#config GoogleSccEventThreatDetectionCustomModule#config}

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```csharp
public string EnablementState { get; set; }
```

- *Type:* string

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#enablement_state GoogleSccEventThreatDetectionCustomModule#enablement_state}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#organization GoogleSccEventThreatDetectionCustomModule#organization}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#type GoogleSccEventThreatDetectionCustomModule#type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#display_name GoogleSccEventThreatDetectionCustomModule#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```csharp
public GoogleSccEventThreatDetectionCustomModuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#timeouts GoogleSccEventThreatDetectionCustomModule#timeouts}

---

### GoogleSccEventThreatDetectionCustomModuleTimeouts <a name="GoogleSccEventThreatDetectionCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccEventThreatDetectionCustomModuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



