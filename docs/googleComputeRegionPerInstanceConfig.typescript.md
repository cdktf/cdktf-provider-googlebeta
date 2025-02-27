# `googleComputeRegionPerInstanceConfig` Submodule <a name="`googleComputeRegionPerInstanceConfig` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionPerInstanceConfig <a name="GoogleComputeRegionPerInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config google_compute_region_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig(scope: Construct, id: string, config: GoogleComputeRegionPerInstanceConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig">GoogleComputeRegionPerInstanceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig">GoogleComputeRegionPerInstanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.putPreservedState">putPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetMinimalAction">resetMinimalAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetMostDisruptiveAllowedAction">resetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetPreservedState">resetPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetRemoveInstanceOnDestroy">resetRemoveInstanceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetRemoveInstanceStateOnDestroy">resetRemoveInstanceStateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPreservedState` <a name="putPreservedState" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.putPreservedState"></a>

```typescript
public putPreservedState(value: GoogleComputeRegionPerInstanceConfigPreservedState): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.putPreservedState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState">GoogleComputeRegionPerInstanceConfigPreservedState</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionPerInstanceConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts">GoogleComputeRegionPerInstanceConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinimalAction` <a name="resetMinimalAction" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetMinimalAction"></a>

```typescript
public resetMinimalAction(): void
```

##### `resetMostDisruptiveAllowedAction` <a name="resetMostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetMostDisruptiveAllowedAction"></a>

```typescript
public resetMostDisruptiveAllowedAction(): void
```

##### `resetPreservedState` <a name="resetPreservedState" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetPreservedState"></a>

```typescript
public resetPreservedState(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRemoveInstanceOnDestroy` <a name="resetRemoveInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetRemoveInstanceOnDestroy"></a>

```typescript
public resetRemoveInstanceOnDestroy(): void
```

##### `resetRemoveInstanceStateOnDestroy` <a name="resetRemoveInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetRemoveInstanceStateOnDestroy"></a>

```typescript
public resetRemoveInstanceStateOnDestroy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionPerInstanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isConstruct"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isTerraformElement"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isTerraformResource"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.generateConfigForImport"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRegionPerInstanceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionPerInstanceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionPerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionPerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference">GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference">GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.minimalActionInput">minimalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedActionInput">mostDisruptiveAllowedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.preservedStateInput">preservedStateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState">GoogleComputeRegionPerInstanceConfigPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.regionInstanceGroupManagerInput">regionInstanceGroupManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.removeInstanceOnDestroyInput">removeInstanceOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroyInput">removeInstanceStateOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts">GoogleComputeRegionPerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.minimalAction">minimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.regionInstanceGroupManager">regionInstanceGroupManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.removeInstanceOnDestroy">removeInstanceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `preservedState`<sup>Required</sup> <a name="preservedState" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.preservedState"></a>

```typescript
public readonly preservedState: GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference">GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference">GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `minimalActionInput`<sup>Optional</sup> <a name="minimalActionInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.minimalActionInput"></a>

```typescript
public readonly minimalActionInput: string;
```

- *Type:* string

---

##### `mostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="mostDisruptiveAllowedActionInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedActionInput"></a>

```typescript
public readonly mostDisruptiveAllowedActionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `preservedStateInput`<sup>Optional</sup> <a name="preservedStateInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.preservedStateInput"></a>

```typescript
public readonly preservedStateInput: GoogleComputeRegionPerInstanceConfigPreservedState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState">GoogleComputeRegionPerInstanceConfigPreservedState</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `regionInstanceGroupManagerInput`<sup>Optional</sup> <a name="regionInstanceGroupManagerInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.regionInstanceGroupManagerInput"></a>

```typescript
public readonly regionInstanceGroupManagerInput: string;
```

- *Type:* string

---

##### `removeInstanceOnDestroyInput`<sup>Optional</sup> <a name="removeInstanceOnDestroyInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.removeInstanceOnDestroyInput"></a>

```typescript
public readonly removeInstanceOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `removeInstanceStateOnDestroyInput`<sup>Optional</sup> <a name="removeInstanceStateOnDestroyInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroyInput"></a>

```typescript
public readonly removeInstanceStateOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionPerInstanceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts">GoogleComputeRegionPerInstanceConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

---

##### `mostDisruptiveAllowedAction`<sup>Required</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `regionInstanceGroupManager`<sup>Required</sup> <a name="regionInstanceGroupManager" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.regionInstanceGroupManager"></a>

```typescript
public readonly regionInstanceGroupManager: string;
```

- *Type:* string

---

##### `removeInstanceOnDestroy`<sup>Required</sup> <a name="removeInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.removeInstanceOnDestroy"></a>

```typescript
public readonly removeInstanceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `removeInstanceStateOnDestroy`<sup>Required</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroy"></a>

```typescript
public readonly removeInstanceStateOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionPerInstanceConfigConfig <a name="GoogleComputeRegionPerInstanceConfigConfig" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputeRegionPerInstanceConfigConfig: googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.name">name</a></code> | <code>string</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.regionInstanceGroupManager">regionInstanceGroupManager</a></code> | <code>string</code> | The region instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#id GoogleComputeRegionPerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.minimalAction">minimalAction</a></code> | <code>string</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState">GoogleComputeRegionPerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#project GoogleComputeRegionPerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.region">region</a></code> | <code>string</code> | Region where the containing instance group manager is located. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.removeInstanceOnDestroy">removeInstanceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, deleting this config will immediately remove the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts">GoogleComputeRegionPerInstanceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#name GoogleComputeRegionPerInstanceConfig#name}

---

##### `regionInstanceGroupManager`<sup>Required</sup> <a name="regionInstanceGroupManager" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.regionInstanceGroupManager"></a>

```typescript
public readonly regionInstanceGroupManager: string;
```

- *Type:* string

The region instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#region_instance_group_manager GoogleComputeRegionPerInstanceConfig#region_instance_group_manager}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#id GoogleComputeRegionPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimalAction`<sup>Optional</sup> <a name="minimalAction" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:
* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#minimal_action GoogleComputeRegionPerInstanceConfig#minimal_action}

---

##### `mostDisruptiveAllowedAction`<sup>Optional</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:
* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#most_disruptive_allowed_action GoogleComputeRegionPerInstanceConfig#most_disruptive_allowed_action}

---

##### `preservedState`<sup>Optional</sup> <a name="preservedState" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.preservedState"></a>

```typescript
public readonly preservedState: GoogleComputeRegionPerInstanceConfigPreservedState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState">GoogleComputeRegionPerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#preserved_state GoogleComputeRegionPerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#project GoogleComputeRegionPerInstanceConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#region GoogleComputeRegionPerInstanceConfig#region}

---

##### `removeInstanceOnDestroy`<sup>Optional</sup> <a name="removeInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.removeInstanceOnDestroy"></a>

```typescript
public readonly removeInstanceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, deleting this config will immediately remove the underlying instance.

When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#remove_instance_on_destroy GoogleComputeRegionPerInstanceConfig#remove_instance_on_destroy}

---

##### `removeInstanceStateOnDestroy`<sup>Optional</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.removeInstanceStateOnDestroy"></a>

```typescript
public readonly removeInstanceStateOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#remove_instance_state_on_destroy GoogleComputeRegionPerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionPerInstanceConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts">GoogleComputeRegionPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#timeouts GoogleComputeRegionPerInstanceConfig#timeouts}

---

### GoogleComputeRegionPerInstanceConfigPreservedState <a name="GoogleComputeRegionPerInstanceConfigPreservedState" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputeRegionPerInstanceConfigPreservedState: googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState.property.disk">disk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk">GoogleComputeRegionPerInstanceConfigPreservedStateDisk</a>[]</code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState.property.externalIp">externalIp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp</a>[]</code> | external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState.property.internalIp">internalIp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp</a>[]</code> | internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Preserved metadata defined for this instance. This is a list of key->value pairs. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState.property.disk"></a>

```typescript
public readonly disk: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk">GoogleComputeRegionPerInstanceConfigPreservedStateDisk</a>[]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#disk GoogleComputeRegionPerInstanceConfig#disk}

---

##### `externalIp`<sup>Optional</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState.property.externalIp"></a>

```typescript
public readonly externalIp: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp</a>[]

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#external_ip GoogleComputeRegionPerInstanceConfig#external_ip}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState.property.internalIp"></a>

```typescript
public readonly internalIp: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp</a>[]

internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#internal_ip GoogleComputeRegionPerInstanceConfig#internal_ip}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#metadata GoogleComputeRegionPerInstanceConfig#metadata}

---

### GoogleComputeRegionPerInstanceConfigPreservedStateDisk <a name="GoogleComputeRegionPerInstanceConfigPreservedStateDisk" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputeRegionPerInstanceConfigPreservedStateDisk: googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk.property.deviceName">deviceName</a></code> | <code>string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk.property.source">source</a></code> | <code>string</code> | The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk.property.deleteRule">deleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk.property.mode">mode</a></code> | <code>string</code> | The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#device_name GoogleComputeRegionPerInstanceConfig#device_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#source GoogleComputeRegionPerInstanceConfig#source}

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#delete_rule GoogleComputeRegionPerInstanceConfig#delete_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#mode GoogleComputeRegionPerInstanceConfig#mode}

---

### GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp <a name="GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputeRegionPerInstanceConfigPreservedStateExternalIp: googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp.property.interfaceName">interfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#interface_name GoogleComputeRegionPerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp.property.autoDelete">autoDelete</a></code> | <code>string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | ip_address block. |

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#interface_name GoogleComputeRegionPerInstanceConfig#interface_name}.

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp.property.autoDelete"></a>

```typescript
public readonly autoDelete: string;
```

- *Type:* string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#auto_delete GoogleComputeRegionPerInstanceConfig#auto_delete}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp.property.ipAddress"></a>

```typescript
public readonly ipAddress: GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#ip_address GoogleComputeRegionPerInstanceConfig#ip_address}

---

### GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress <a name="GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress: googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.property.address">address</a></code> | <code>string</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#address GoogleComputeRegionPerInstanceConfig#address}

---

### GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp <a name="GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputeRegionPerInstanceConfigPreservedStateInternalIp: googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp.property.interfaceName">interfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#interface_name GoogleComputeRegionPerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp.property.autoDelete">autoDelete</a></code> | <code>string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | ip_address block. |

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#interface_name GoogleComputeRegionPerInstanceConfig#interface_name}.

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp.property.autoDelete"></a>

```typescript
public readonly autoDelete: string;
```

- *Type:* string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#auto_delete GoogleComputeRegionPerInstanceConfig#auto_delete}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp.property.ipAddress"></a>

```typescript
public readonly ipAddress: GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#ip_address GoogleComputeRegionPerInstanceConfig#ip_address}

---

### GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress <a name="GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress: googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.property.address">address</a></code> | <code>string</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#address GoogleComputeRegionPerInstanceConfig#address}

---

### GoogleComputeRegionPerInstanceConfigTimeouts <a name="GoogleComputeRegionPerInstanceConfigTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputeRegionPerInstanceConfigTimeouts: googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#create GoogleComputeRegionPerInstanceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#delete GoogleComputeRegionPerInstanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#update GoogleComputeRegionPerInstanceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#create GoogleComputeRegionPerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#delete GoogleComputeRegionPerInstanceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_per_instance_config#update GoogleComputeRegionPerInstanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionPerInstanceConfigPreservedStateDiskList <a name="GoogleComputeRegionPerInstanceConfigPreservedStateDiskList" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk">GoogleComputeRegionPerInstanceConfigPreservedStateDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk">GoogleComputeRegionPerInstanceConfigPreservedStateDisk</a>[]

---


### GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference <a name="GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule"></a>

```typescript
public resetDeleteRule(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk">GoogleComputeRegionPerInstanceConfigPreservedStateDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput"></a>

```typescript
public readonly deleteRuleInput: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk">GoogleComputeRegionPerInstanceConfigPreservedStateDisk</a>

---


### GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference <a name="GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---


### GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList <a name="GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp</a>[]

---


### GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference <a name="GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress">putIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAddress` <a name="putIpAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress"></a>

```typescript
public putIpAddress(value: GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete"></a>

```typescript
public resetAutoDelete(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete">autoDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput"></a>

```typescript
public readonly autoDeleteInput: string;
```

- *Type:* string

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput"></a>

```typescript
public readonly interfaceNameInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete"></a>

```typescript
public readonly autoDelete: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp</a>

---


### GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference <a name="GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---


### GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList <a name="GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp</a>[]

---


### GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference <a name="GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress">putIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAddress` <a name="putIpAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress"></a>

```typescript
public putIpAddress(value: GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete"></a>

```typescript
public resetAutoDelete(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete">autoDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput"></a>

```typescript
public readonly autoDeleteInput: string;
```

- *Type:* string

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput"></a>

```typescript
public readonly interfaceNameInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete"></a>

```typescript
public readonly autoDelete: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp</a>

---


### GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference <a name="GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp">putExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp">putInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resetExternalIp">resetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisk` <a name="putDisk" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk"></a>

```typescript
public putDisk(value: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk">GoogleComputeRegionPerInstanceConfigPreservedStateDisk</a>[]

---

##### `putExternalIp` <a name="putExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp"></a>

```typescript
public putExternalIp(value: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp</a>[]

---

##### `putInternalIp` <a name="putInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp"></a>

```typescript
public putInternalIp(value: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp</a>[]

---

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resetDisk"></a>

```typescript
public resetDisk(): void
```

##### `resetExternalIp` <a name="resetExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resetExternalIp"></a>

```typescript
public resetExternalIp(): void
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resetInternalIp"></a>

```typescript
public resetInternalIp(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList">GoogleComputeRegionPerInstanceConfigPreservedStateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIp">internalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.diskInput">diskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk">GoogleComputeRegionPerInstanceConfigPreservedStateDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIpInput">externalIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState">GoogleComputeRegionPerInstanceConfigPreservedState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.disk"></a>

```typescript
public readonly disk: GoogleComputeRegionPerInstanceConfigPreservedStateDiskList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDiskList">GoogleComputeRegionPerInstanceConfigPreservedStateDiskList</a>

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIp"></a>

```typescript
public readonly externalIp: GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIpList</a>

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIpList</a>

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.diskInput"></a>

```typescript
public readonly diskInput: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateDisk">GoogleComputeRegionPerInstanceConfigPreservedStateDisk</a>[]

---

##### `externalIpInput`<sup>Optional</sup> <a name="externalIpInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIpInput"></a>

```typescript
public readonly externalIpInput: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateExternalIp</a>[]

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIpInput"></a>

```typescript
public readonly internalIpInput: IResolvable | GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp">GoogleComputeRegionPerInstanceConfigPreservedStateInternalIp</a>[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionPerInstanceConfigPreservedState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigPreservedState">GoogleComputeRegionPerInstanceConfigPreservedState</a>

---


### GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference <a name="GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionPerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts">GoogleComputeRegionPerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionPerInstanceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionPerInstanceConfig.GoogleComputeRegionPerInstanceConfigTimeouts">GoogleComputeRegionPerInstanceConfigTimeouts</a>

---



