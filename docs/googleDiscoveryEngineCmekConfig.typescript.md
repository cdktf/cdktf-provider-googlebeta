# `googleDiscoveryEngineCmekConfig` Submodule <a name="`googleDiscoveryEngineCmekConfig` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineCmekConfig <a name="GoogleDiscoveryEngineCmekConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config google_discovery_engine_cmek_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig(scope: Construct, id: string, config: GoogleDiscoveryEngineCmekConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig">GoogleDiscoveryEngineCmekConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig">GoogleDiscoveryEngineCmekConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putSingleRegionKeys">putSingleRegionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetCmekConfigId">resetCmekConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSetDefault">resetSetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSingleRegionKeys">resetSingleRegionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSingleRegionKeys` <a name="putSingleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putSingleRegionKeys"></a>

```typescript
public putSingleRegionKeys(value: IResolvable | GoogleDiscoveryEngineCmekConfigSingleRegionKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putSingleRegionKeys.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDiscoveryEngineCmekConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

---

##### `resetCmekConfigId` <a name="resetCmekConfigId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetCmekConfigId"></a>

```typescript
public resetCmekConfigId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSetDefault` <a name="resetSetDefault" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSetDefault"></a>

```typescript
public resetSetDefault(): void
```

##### `resetSingleRegionKeys` <a name="resetSingleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSingleRegionKeys"></a>

```typescript
public resetSingleRegionKeys(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineCmekConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDiscoveryEngineCmekConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineCmekConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineCmekConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineCmekConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lastRotationTimestampMicros">lastRotationTimestampMicros</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.notebooklmState">notebooklmState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeys">singleRegionKeys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList">GoogleDiscoveryEngineCmekConfigSingleRegionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference">GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigIdInput">cmekConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefaultInput">setDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeysInput">singleRegionKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigId">cmekConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefault">setDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyVersion"></a>

```typescript
public readonly kmsKeyVersion: string;
```

- *Type:* string

---

##### `lastRotationTimestampMicros`<sup>Required</sup> <a name="lastRotationTimestampMicros" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lastRotationTimestampMicros"></a>

```typescript
public readonly lastRotationTimestampMicros: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notebooklmState`<sup>Required</sup> <a name="notebooklmState" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.notebooklmState"></a>

```typescript
public readonly notebooklmState: string;
```

- *Type:* string

---

##### `singleRegionKeys`<sup>Required</sup> <a name="singleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeys"></a>

```typescript
public readonly singleRegionKeys: GoogleDiscoveryEngineCmekConfigSingleRegionKeysList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList">GoogleDiscoveryEngineCmekConfigSingleRegionKeysList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference">GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference</a>

---

##### `cmekConfigIdInput`<sup>Optional</sup> <a name="cmekConfigIdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigIdInput"></a>

```typescript
public readonly cmekConfigIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `setDefaultInput`<sup>Optional</sup> <a name="setDefaultInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefaultInput"></a>

```typescript
public readonly setDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `singleRegionKeysInput`<sup>Optional</sup> <a name="singleRegionKeysInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeysInput"></a>

```typescript
public readonly singleRegionKeysInput: IResolvable | GoogleDiscoveryEngineCmekConfigSingleRegionKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDiscoveryEngineCmekConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

---

##### `cmekConfigId`<sup>Required</sup> <a name="cmekConfigId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigId"></a>

```typescript
public readonly cmekConfigId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `setDefault`<sup>Required</sup> <a name="setDefault" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefault"></a>

```typescript
public readonly setDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineCmekConfigConfig <a name="GoogleDiscoveryEngineCmekConfigConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

const googleDiscoveryEngineCmekConfigConfig: googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.cmekConfigId">cmekConfigId</a></code> | <code>string</code> | The unique id of the cmek config. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.setDefault">setDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set the following CmekConfig as the default to be used for child resources if one is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.singleRegionKeys">singleRegionKeys</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>[]</code> | single_region_keys block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#kms_key GoogleDiscoveryEngineCmekConfig#kms_key}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#location GoogleDiscoveryEngineCmekConfig#location}

---

##### `cmekConfigId`<sup>Optional</sup> <a name="cmekConfigId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.cmekConfigId"></a>

```typescript
public readonly cmekConfigId: string;
```

- *Type:* string

The unique id of the cmek config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#cmek_config_id GoogleDiscoveryEngineCmekConfig#cmek_config_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}.

---

##### `setDefault`<sup>Optional</sup> <a name="setDefault" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.setDefault"></a>

```typescript
public readonly setDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set the following CmekConfig as the default to be used for child resources if one is not specified.

The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#set_default GoogleDiscoveryEngineCmekConfig#set_default}

---

##### `singleRegionKeys`<sup>Optional</sup> <a name="singleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.singleRegionKeys"></a>

```typescript
public readonly singleRegionKeys: IResolvable | GoogleDiscoveryEngineCmekConfigSingleRegionKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>[]

single_region_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#single_region_keys GoogleDiscoveryEngineCmekConfig#single_region_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineCmekConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#timeouts GoogleDiscoveryEngineCmekConfig#timeouts}

---

### GoogleDiscoveryEngineCmekConfigSingleRegionKeys <a name="GoogleDiscoveryEngineCmekConfigSingleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys.Initializer"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

const googleDiscoveryEngineCmekConfigSingleRegionKeys: googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys.property.kmsKey">kmsKey</a></code> | <code>string</code> | Single-regional kms key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Single-regional kms key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#kms_key GoogleDiscoveryEngineCmekConfig#kms_key}

---

### GoogleDiscoveryEngineCmekConfigTimeouts <a name="GoogleDiscoveryEngineCmekConfigTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.Initializer"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

const googleDiscoveryEngineCmekConfigTimeouts: googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#create GoogleDiscoveryEngineCmekConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#delete GoogleDiscoveryEngineCmekConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#update GoogleDiscoveryEngineCmekConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#create GoogleDiscoveryEngineCmekConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#delete GoogleDiscoveryEngineCmekConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_cmek_config#update GoogleDiscoveryEngineCmekConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineCmekConfigSingleRegionKeysList <a name="GoogleDiscoveryEngineCmekConfigSingleRegionKeysList" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineCmekConfigSingleRegionKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>[]

---


### GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference <a name="GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineCmekConfigSingleRegionKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>

---


### GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineCmekConfig } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineCmekConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

---



