# `googleAccessContextManagerServicePerimeterDryRunEgressPolicy` Submodule <a name="`googleAccessContextManagerServicePerimeterDryRunEgressPolicy` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy google_access_context_manager_service_perimeter_dry_run_egress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy(scope: Construct, id: string, config: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom">putEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo">putEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressFrom">resetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressTo">resetEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressFrom` <a name="putEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom"></a>

```typescript
public putEgressFrom(value: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---

##### `putEgressTo` <a name="putEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo"></a>

```typescript
public putEgressTo(value: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

---

##### `resetEgressFrom` <a name="resetEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressFrom"></a>

```typescript
public resetEgressFrom(): void
```

##### `resetEgressTo` <a name="resetEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressTo"></a>

```typescript
public resetEgressTo(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTitle"></a>

```typescript
public resetTitle(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFromInput">egressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressToInput">egressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeterInput">perimeterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeter">perimeter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

---

##### `egressFrom`<sup>Required</sup> <a name="egressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFrom"></a>

```typescript
public readonly egressFrom: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference</a>

---

##### `egressTo`<sup>Required</sup> <a name="egressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressTo"></a>

```typescript
public readonly egressTo: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference</a>

---

##### `egressFromInput`<sup>Optional</sup> <a name="egressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFromInput"></a>

```typescript
public readonly egressFromInput: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---

##### `egressToInput`<sup>Optional</sup> <a name="egressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressToInput"></a>

```typescript
public readonly egressToInput: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `perimeterInput`<sup>Optional</sup> <a name="perimeterInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeterInput"></a>

```typescript
public readonly perimeterInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeter"></a>

```typescript
public readonly perimeter: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig: googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.perimeter">perimeter</a></code> | <code>string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#id GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.title">title</a></code> | <code>string</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.perimeter"></a>

```typescript
public readonly perimeter: string;
```

- *Type:* string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#perimeter GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#perimeter}

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressFrom"></a>

```typescript
public readonly egressFrom: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#egress_from GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressTo"></a>

```typescript
public readonly egressTo: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#egress_to GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#egress_to}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#id GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#timeouts GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#title GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#title}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom: googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identities">identities</a></code> | <code>string[]</code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identityType">identityType</a></code> | <code>string</code> | Specifies the type of identities that are allowed access to outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sourceRestriction">sourceRestriction</a></code> | <code>string</code> | Whether to enforce traffic restrictions based on 'sources' field. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sources">sources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>[]</code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identities"></a>

```typescript
public readonly identities: string[];
```

- *Type:* string[]

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#identities GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#identity_type GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#identity_type}

---

##### `sourceRestriction`<sup>Optional</sup> <a name="sourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sourceRestriction"></a>

```typescript
public readonly sourceRestriction: string;
```

- *Type:* string

Whether to enforce traffic restrictions based on 'sources' field.

If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#source_restriction GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#source_restriction}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sources"></a>

```typescript
public readonly sources: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>[]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#sources GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#sources}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources: googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.accessLevel">accessLevel</a></code> | <code>string</code> | An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.resource">resource</a></code> | <code>string</code> | A Google Cloud resource that is allowed to egress the perimeter. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#access_level GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

A Google Cloud resource that is allowed to egress the perimeter.

Requests from these resources are allowed to access data outside the perimeter.
Currently only projects are allowed. Project format: 'projects/{project_number}'.
The resource may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the
case of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#resource GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#resource}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo: googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.externalResources">externalResources</a></code> | <code>string[]</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.operations">operations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>[]</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.resources">resources</a></code> | <code>string[]</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `externalResources`<sup>Optional</sup> <a name="externalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.externalResources"></a>

```typescript
public readonly externalResources: string[];
```

- *Type:* string[]

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#external_resources GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.operations"></a>

```typescript
public readonly operations: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>[]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#operations GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#resources GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#resources}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations: googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>[]</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.methodSelectors"></a>

```typescript
public readonly methodSelectors: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>[]

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#method_selectors GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#service_name GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#service_name}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors: googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>string</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#method GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#permission GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#permission}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts: googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#create GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#create GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSourceRestriction">resetSourceRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources"></a>

```typescript
public putSources(value: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>[]

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentities"></a>

```typescript
public resetIdentities(): void
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentityType"></a>

```typescript
public resetIdentityType(): void
```

##### `resetSourceRestriction` <a name="resetSourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSourceRestriction"></a>

```typescript
public resetSourceRestriction(): void
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSources"></a>

```typescript
public resetSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput">sourceRestrictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identities">identities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestriction">sourceRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sources"></a>

```typescript
public readonly sources: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identitiesInput"></a>

```typescript
public readonly identitiesInput: string[];
```

- *Type:* string[]

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityTypeInput"></a>

```typescript
public readonly identityTypeInput: string;
```

- *Type:* string

---

##### `sourceRestrictionInput`<sup>Optional</sup> <a name="sourceRestrictionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput"></a>

```typescript
public readonly sourceRestrictionInput: string;
```

- *Type:* string

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>[]

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identities"></a>

```typescript
public readonly identities: string[];
```

- *Type:* string[]

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `sourceRestriction`<sup>Required</sup> <a name="sourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestriction"></a>

```typescript
public readonly sourceRestriction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>[]

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>[]

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>[]

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors"></a>

```typescript
public putMethodSelectors(value: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>[]

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors"></a>

```typescript
public resetMethodSelectors(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectors"></a>

```typescript
public readonly methodSelectors: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```typescript
public readonly methodSelectorsInput: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors</a>[]

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetExternalResources">resetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations"></a>

```typescript
public putOperations(value: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>[]

---

##### `resetExternalResources` <a name="resetExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetExternalResources"></a>

```typescript
public resetExternalResources(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResourcesInput">externalResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResources">externalResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operations"></a>

```typescript
public readonly operations: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList</a>

---

##### `externalResourcesInput`<sup>Optional</sup> <a name="externalResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResourcesInput"></a>

```typescript
public readonly externalResourcesInput: string[];
```

- *Type:* string[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `externalResources`<sup>Required</sup> <a name="externalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResources"></a>

```typescript
public readonly externalResources: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterDryRunEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

---



