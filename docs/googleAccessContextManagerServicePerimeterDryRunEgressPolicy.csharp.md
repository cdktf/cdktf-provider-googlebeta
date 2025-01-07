# `googleAccessContextManagerServicePerimeterDryRunEgressPolicy` Submodule <a name="`googleAccessContextManagerServicePerimeterDryRunEgressPolicy` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy google_access_context_manager_service_perimeter_dry_run_egress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy(Construct Scope, string Id, GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom">PutEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo">PutEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressFrom">ResetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressTo">ResetEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressFrom` <a name="PutEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom"></a>

```csharp
private void PutEgressFrom(GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---

##### `PutEgressTo` <a name="PutEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo"></a>

```csharp
private void PutEgressTo(GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

---

##### `ResetEgressFrom` <a name="ResetEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressFrom"></a>

```csharp
private void ResetEgressFrom()
```

##### `ResetEgressTo` <a name="ResetEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressTo"></a>

```csharp
private void ResetEgressTo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFromInput">EgressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressToInput">EgressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeterInput">PerimeterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeter">Perimeter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EgressFrom`<sup>Required</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFrom"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference EgressFrom { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference</a>

---

##### `EgressTo`<sup>Required</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressTo"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference EgressTo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference</a>

---

##### `EgressFromInput`<sup>Optional</sup> <a name="EgressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFromInput"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom EgressFromInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---

##### `EgressToInput`<sup>Optional</sup> <a name="EgressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressToInput"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo EgressToInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PerimeterInput`<sup>Optional</sup> <a name="PerimeterInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeterInput"></a>

```csharp
public string PerimeterInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeter"></a>

```csharp
public string Perimeter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Perimeter,
    GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom EgressFrom = null,
    GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo EgressTo = null,
    string Id = null,
    GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.perimeter">Perimeter</a></code> | <code>string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#id GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.perimeter"></a>

```csharp
public string Perimeter { get; set; }
```

- *Type:* string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#perimeter GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#perimeter}

---

##### `EgressFrom`<sup>Optional</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressFrom"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom EgressFrom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#egress_from GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#egress_from}

---

##### `EgressTo`<sup>Optional</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressTo"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo EgressTo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#egress_to GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#egress_to}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#id GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#timeouts GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#timeouts}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom {
    string[] Identities = null,
    string IdentityType = null,
    string SourceRestriction = null,
    object Sources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identities">Identities</a></code> | <code>string[]</code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identityType">IdentityType</a></code> | <code>string</code> | Specifies the type of identities that are allowed access to outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sourceRestriction">SourceRestriction</a></code> | <code>string</code> | Whether to enforce traffic restrictions based on 'sources' field. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sources">Sources</a></code> | <code>object</code> | sources block. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identities"></a>

```csharp
public string[] Identities { get; set; }
```

- *Type:* string[]

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#identities GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identityType"></a>

```csharp
public string IdentityType { get; set; }
```

- *Type:* string

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#identity_type GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#identity_type}

---

##### `SourceRestriction`<sup>Optional</sup> <a name="SourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sourceRestriction"></a>

```csharp
public string SourceRestriction { get; set; }
```

- *Type:* string

Whether to enforce traffic restrictions based on 'sources' field.

If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#source_restriction GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#source_restriction}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sources"></a>

```csharp
public object Sources { get; set; }
```

- *Type:* object

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#sources GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#sources}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources {
    string AccessLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.accessLevel">AccessLevel</a></code> | <code>string</code> | An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#access_level GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#access_level}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo {
    string[] ExternalResources = null,
    object Operations = null,
    string[] Resources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.externalResources">ExternalResources</a></code> | <code>string[]</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.operations">Operations</a></code> | <code>object</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.resources">Resources</a></code> | <code>string[]</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `ExternalResources`<sup>Optional</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.externalResources"></a>

```csharp
public string[] ExternalResources { get; set; }
```

- *Type:* string[]

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#external_resources GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#external_resources}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.operations"></a>

```csharp
public object Operations { get; set; }
```

- *Type:* object

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#operations GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#resources GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#resources}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations {
    object MethodSelectors = null,
    string ServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>object</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.methodSelectors"></a>

```csharp
public object MethodSelectors { get; set; }
```

- *Type:* object

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#method_selectors GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#service_name GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#service_name}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors {
    string Method = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.method">Method</a></code> | <code>string</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#method GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#permission GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#permission}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#create GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#create GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSourceRestriction">ResetSourceRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources"></a>

```csharp
private void PutSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources.parameter.value"></a>

- *Type:* object

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentities"></a>

```csharp
private void ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentityType"></a>

```csharp
private void ResetIdentityType()
```

##### `ResetSourceRestriction` <a name="ResetSourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSourceRestriction"></a>

```csharp
private void ResetSourceRestriction()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSources"></a>

```csharp
private void ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput">SourceRestrictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identities">Identities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityType">IdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestriction">SourceRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sources"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identitiesInput"></a>

```csharp
public string[] IdentitiesInput { get; }
```

- *Type:* string[]

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityTypeInput"></a>

```csharp
public string IdentityTypeInput { get; }
```

- *Type:* string

---

##### `SourceRestrictionInput`<sup>Optional</sup> <a name="SourceRestrictionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput"></a>

```csharp
public string SourceRestrictionInput { get; }
```

- *Type:* string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourcesInput"></a>

```csharp
public object SourcesInput { get; }
```

- *Type:* object

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identities"></a>

```csharp
public string[] Identities { get; }
```

- *Type:* string[]

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityType"></a>

```csharp
public string IdentityType { get; }
```

- *Type:* string

---

##### `SourceRestriction`<sup>Required</sup> <a name="SourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestriction"></a>

```csharp
public string SourceRestriction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get"></a>

```csharp
private GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get"></a>

```csharp
private GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get"></a>

```csharp
private GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors"></a>

```csharp
private void PutMethodSelectors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* object

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors"></a>

```csharp
private void ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectors"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList MethodSelectors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```csharp
public object MethodSelectorsInput { get; }
```

- *Type:* object

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetExternalResources">ResetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations"></a>

```csharp
private void PutOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* object

---

##### `ResetExternalResources` <a name="ResetExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetExternalResources"></a>

```csharp
private void ResetExternalResources()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetOperations"></a>

```csharp
private void ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResourcesInput">ExternalResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResources">ExternalResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operations"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList Operations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList</a>

---

##### `ExternalResourcesInput`<sup>Optional</sup> <a name="ExternalResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResourcesInput"></a>

```csharp
public string[] ExternalResourcesInput { get; }
```

- *Type:* string[]

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operationsInput"></a>

```csharp
public object OperationsInput { get; }
```

- *Type:* object

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `ExternalResources`<sup>Required</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResources"></a>

```csharp
public string[] ExternalResources { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



