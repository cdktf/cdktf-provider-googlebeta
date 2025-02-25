# `googleCloudfunctions2Function` Submodule <a name="`googleCloudfunctions2Function` Submodule" id="@cdktf/provider-google-beta.googleCloudfunctions2Function"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudfunctions2Function <a name="GoogleCloudfunctions2Function" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function google_cloudfunctions2_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2Function(scope: Construct, id: string, config: GoogleCloudfunctions2FunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig">GoogleCloudfunctions2FunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig">GoogleCloudfunctions2FunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putBuildConfig">putBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putEventTrigger">putEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putServiceConfig">putServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetBuildConfig">resetBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetEventTrigger">resetEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetServiceConfig">resetServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfig` <a name="putBuildConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putBuildConfig"></a>

```typescript
public putBuildConfig(value: GoogleCloudfunctions2FunctionBuildConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig">GoogleCloudfunctions2FunctionBuildConfig</a>

---

##### `putEventTrigger` <a name="putEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putEventTrigger"></a>

```typescript
public putEventTrigger(value: GoogleCloudfunctions2FunctionEventTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putEventTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger">GoogleCloudfunctions2FunctionEventTrigger</a>

---

##### `putServiceConfig` <a name="putServiceConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putServiceConfig"></a>

```typescript
public putServiceConfig(value: GoogleCloudfunctions2FunctionServiceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig">GoogleCloudfunctions2FunctionServiceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudfunctions2FunctionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts">GoogleCloudfunctions2FunctionTimeouts</a>

---

##### `resetBuildConfig` <a name="resetBuildConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetBuildConfig"></a>

```typescript
public resetBuildConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEventTrigger` <a name="resetEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetEventTrigger"></a>

```typescript
public resetEventTrigger(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServiceConfig` <a name="resetServiceConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetServiceConfig"></a>

```typescript
public resetServiceConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudfunctions2Function resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.isConstruct"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

googleCloudfunctions2Function.GoogleCloudfunctions2Function.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.isTerraformElement"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

googleCloudfunctions2Function.GoogleCloudfunctions2Function.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.isTerraformResource"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

googleCloudfunctions2Function.GoogleCloudfunctions2Function.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.generateConfigForImport"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

googleCloudfunctions2Function.GoogleCloudfunctions2Function.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCloudfunctions2Function resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudfunctions2Function to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudfunctions2Function that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudfunctions2Function to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference">GoogleCloudfunctions2FunctionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference">GoogleCloudfunctions2FunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference">GoogleCloudfunctions2FunctionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference">GoogleCloudfunctions2FunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.buildConfigInput">buildConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig">GoogleCloudfunctions2FunctionBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.eventTriggerInput">eventTriggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger">GoogleCloudfunctions2FunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.serviceConfigInput">serviceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig">GoogleCloudfunctions2FunctionServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts">GoogleCloudfunctions2FunctionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.buildConfig"></a>

```typescript
public readonly buildConfig: GoogleCloudfunctions2FunctionBuildConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference">GoogleCloudfunctions2FunctionBuildConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `eventTrigger`<sup>Required</sup> <a name="eventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.eventTrigger"></a>

```typescript
public readonly eventTrigger: GoogleCloudfunctions2FunctionEventTriggerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference">GoogleCloudfunctions2FunctionEventTriggerOutputReference</a>

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: GoogleCloudfunctions2FunctionServiceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference">GoogleCloudfunctions2FunctionServiceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudfunctions2FunctionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference">GoogleCloudfunctions2FunctionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `buildConfigInput`<sup>Optional</sup> <a name="buildConfigInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.buildConfigInput"></a>

```typescript
public readonly buildConfigInput: GoogleCloudfunctions2FunctionBuildConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig">GoogleCloudfunctions2FunctionBuildConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventTriggerInput`<sup>Optional</sup> <a name="eventTriggerInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.eventTriggerInput"></a>

```typescript
public readonly eventTriggerInput: GoogleCloudfunctions2FunctionEventTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger">GoogleCloudfunctions2FunctionEventTrigger</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.serviceConfigInput"></a>

```typescript
public readonly serviceConfigInput: GoogleCloudfunctions2FunctionServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig">GoogleCloudfunctions2FunctionServiceConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudfunctions2FunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts">GoogleCloudfunctions2FunctionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2Function.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudfunctions2FunctionBuildConfig <a name="GoogleCloudfunctions2FunctionBuildConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionBuildConfig: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.automaticUpdatePolicy">automaticUpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy</a></code> | automatic_update_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.dockerRepository">dockerRepository</a></code> | <code>string</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.entryPoint">entryPoint</a></code> | <code>string</code> | The name of the function (as defined in source code) that will be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | User-provided build-time environment variables for the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.onDeployUpdatePolicy">onDeployUpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy</a></code> | on_deploy_update_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.runtime">runtime</a></code> | <code>string</code> | The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The fully-qualified name of the service account to be used for building the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource">GoogleCloudfunctions2FunctionBuildConfigSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.workerPool">workerPool</a></code> | <code>string</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |

---

##### `automaticUpdatePolicy`<sup>Optional</sup> <a name="automaticUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.automaticUpdatePolicy"></a>

```typescript
public readonly automaticUpdatePolicy: GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy</a>

automatic_update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#automatic_update_policy GoogleCloudfunctions2Function#automatic_update_policy}

---

##### `dockerRepository`<sup>Optional</sup> <a name="dockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.dockerRepository"></a>

```typescript
public readonly dockerRepository: string;
```

- *Type:* string

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#docker_repository GoogleCloudfunctions2Function#docker_repository}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.entryPoint"></a>

```typescript
public readonly entryPoint: string;
```

- *Type:* string

The name of the function (as defined in source code) that will be executed.

Defaults to the resource name suffix, if not specified. For backward
compatibility, if function with given name is not found, then the system
will try to use function named "function". For Node.js this is name of a
function exported by the module specified in source_location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#entry_point GoogleCloudfunctions2Function#entry_point}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-provided build-time environment variables for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#environment_variables GoogleCloudfunctions2Function#environment_variables}

---

##### `onDeployUpdatePolicy`<sup>Optional</sup> <a name="onDeployUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.onDeployUpdatePolicy"></a>

```typescript
public readonly onDeployUpdatePolicy: GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy</a>

on_deploy_update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#on_deploy_update_policy GoogleCloudfunctions2Function#on_deploy_update_policy}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#runtime GoogleCloudfunctions2Function#runtime}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The fully-qualified name of the service account to be used for building the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#service_account GoogleCloudfunctions2Function#service_account}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.source"></a>

```typescript
public readonly source: GoogleCloudfunctions2FunctionBuildConfigSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource">GoogleCloudfunctions2FunctionBuildConfigSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#source GoogleCloudfunctions2Function#source}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#worker_pool GoogleCloudfunctions2Function#worker_pool}

---

### GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy <a name="GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy = { ... }
```


### GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy <a name="GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy = { ... }
```


### GoogleCloudfunctions2FunctionBuildConfigSource <a name="GoogleCloudfunctions2FunctionBuildConfigSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionBuildConfigSource: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource.property.repoSource">repoSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | repo_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource.property.storageSource">storageSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | storage_source block. |

---

##### `repoSource`<sup>Optional</sup> <a name="repoSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource.property.repoSource"></a>

```typescript
public readonly repoSource: GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#repo_source GoogleCloudfunctions2Function#repo_source}

---

##### `storageSource`<sup>Optional</sup> <a name="storageSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource.property.storageSource"></a>

```typescript
public readonly storageSource: GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#storage_source GoogleCloudfunctions2Function#storage_source}

---

### GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource <a name="GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionBuildConfigSourceRepoSource: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.branchName">branchName</a></code> | <code>string</code> | Regex matching branches to build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.commitSha">commitSha</a></code> | <code>string</code> | Regex matching tags to build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.dir">dir</a></code> | <code>string</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.invertRegex">invertRegex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.projectId">projectId</a></code> | <code>string</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.repoName">repoName</a></code> | <code>string</code> | Name of the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.tagName">tagName</a></code> | <code>string</code> | Regex matching tags to build. |

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

Regex matching branches to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#branch_name GoogleCloudfunctions2Function#branch_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

Regex matching tags to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#commit_sha GoogleCloudfunctions2Function#commit_sha}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#dir GoogleCloudfunctions2Function#dir}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.invertRegex"></a>

```typescript
public readonly invertRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#invert_regex GoogleCloudfunctions2Function#invert_regex}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#project_id GoogleCloudfunctions2Function#project_id}

---

##### `repoName`<sup>Optional</sup> <a name="repoName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#repo_name GoogleCloudfunctions2Function#repo_name}

---

##### `tagName`<sup>Optional</sup> <a name="tagName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

Regex matching tags to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#tag_name GoogleCloudfunctions2Function#tag_name}

---

### GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource <a name="GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionBuildConfigSourceStorageSource: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.property.bucket">bucket</a></code> | <code>string</code> | Google Cloud Storage bucket containing the source. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.property.generation">generation</a></code> | <code>number</code> | Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.property.object">object</a></code> | <code>string</code> | Google Cloud Storage object containing the source. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#bucket GoogleCloudfunctions2Function#bucket}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#generation GoogleCloudfunctions2Function#generation}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Google Cloud Storage object containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#object GoogleCloudfunctions2Function#object}

---

### GoogleCloudfunctions2FunctionConfig <a name="GoogleCloudfunctions2FunctionConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionConfig: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.location">location</a></code> | <code>string</code> | The location of this cloud function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.name">name</a></code> | <code>string</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig">GoogleCloudfunctions2FunctionBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.description">description</a></code> | <code>string</code> | User-provided description of a function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger">GoogleCloudfunctions2FunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#id GoogleCloudfunctions2Function#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs associated with this Cloud Function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#project GoogleCloudfunctions2Function#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig">GoogleCloudfunctions2FunctionServiceConfig</a></code> | service_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts">GoogleCloudfunctions2FunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of this cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#location GoogleCloudfunctions2Function#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#name GoogleCloudfunctions2Function#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `buildConfig`<sup>Optional</sup> <a name="buildConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.buildConfig"></a>

```typescript
public readonly buildConfig: GoogleCloudfunctions2FunctionBuildConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig">GoogleCloudfunctions2FunctionBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#build_config GoogleCloudfunctions2Function#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description of a function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#description GoogleCloudfunctions2Function#description}

---

##### `eventTrigger`<sup>Optional</sup> <a name="eventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.eventTrigger"></a>

```typescript
public readonly eventTrigger: GoogleCloudfunctions2FunctionEventTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger">GoogleCloudfunctions2FunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#event_trigger GoogleCloudfunctions2Function#event_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#id GoogleCloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#kms_key_name GoogleCloudfunctions2Function#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs associated with this Cloud Function.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#labels GoogleCloudfunctions2Function#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#project GoogleCloudfunctions2Function#project}.

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: GoogleCloudfunctions2FunctionServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig">GoogleCloudfunctions2FunctionServiceConfig</a>

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#service_config GoogleCloudfunctions2Function#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudfunctions2FunctionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts">GoogleCloudfunctions2FunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#timeouts GoogleCloudfunctions2Function#timeouts}

---

### GoogleCloudfunctions2FunctionEventTrigger <a name="GoogleCloudfunctions2FunctionEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionEventTrigger: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.eventFilters">eventFilters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters">GoogleCloudfunctions2FunctionEventTriggerEventFilters</a>[]</code> | event_filters block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.eventType">eventType</a></code> | <code>string</code> | Required. The type of event to observe. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.retryPolicy">retryPolicy</a></code> | <code>string</code> | Describes the retry policy in case of function's execution failure. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.triggerRegion">triggerRegion</a></code> | <code>string</code> | The region that the trigger will be in. |

---

##### `eventFilters`<sup>Optional</sup> <a name="eventFilters" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.eventFilters"></a>

```typescript
public readonly eventFilters: IResolvable | GoogleCloudfunctions2FunctionEventTriggerEventFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters">GoogleCloudfunctions2FunctionEventTriggerEventFilters</a>[]

event_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#event_filters GoogleCloudfunctions2Function#event_filters}

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Required. The type of event to observe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#event_type GoogleCloudfunctions2Function#event_type}

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#pubsub_topic GoogleCloudfunctions2Function#pubsub_topic}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: string;
```

- *Type:* string

Describes the retry policy in case of function's execution failure.

Retried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#retry_policy GoogleCloudfunctions2Function#retry_policy}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Optional.

The email of the trigger's service account. The service account
must have permission to invoke Cloud Run services. If empty, defaults to the
Compute Engine default service account: {project_number}-compute@developer.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#service_account_email GoogleCloudfunctions2Function#service_account_email}

---

##### `triggerRegion`<sup>Optional</sup> <a name="triggerRegion" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger.property.triggerRegion"></a>

```typescript
public readonly triggerRegion: string;
```

- *Type:* string

The region that the trigger will be in.

The trigger will only receive
events originating in this region. It can be the same
region as the function, a different region or multi-region, or the global
region. If not provided, defaults to the same region as the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#trigger_region GoogleCloudfunctions2Function#trigger_region}

---

### GoogleCloudfunctions2FunctionEventTriggerEventFilters <a name="GoogleCloudfunctions2FunctionEventTriggerEventFilters" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionEventTriggerEventFilters: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters.property.attribute">attribute</a></code> | <code>string</code> | 'Required. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters.property.value">value</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters.property.operator">operator</a></code> | <code>string</code> | Optional. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

'Required.

The name of a CloudEvents attribute.
Currently, only a subset of attributes are supported for filtering. Use the 'gcloud eventarc providers describe' command to learn more about events and their attributes.
Do not filter for the 'type' attribute here, as this is already achieved by the resource's 'event_type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#attribute GoogleCloudfunctions2Function#attribute}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Required.

The value for the attribute.
If the operator field is set as 'match-path-pattern', this value can be a path pattern instead of an exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#value GoogleCloudfunctions2Function#value}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Optional.

The operator used for matching the events with the value of
the filter. If not specified, only events that have an exact key-value
pair specified in the filter are matched.
The only allowed value is 'match-path-pattern'.
[See documentation on path patterns here](https://cloud.google.com/eventarc/docs/path-patterns)'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#operator GoogleCloudfunctions2Function#operator}

---

### GoogleCloudfunctions2FunctionServiceConfig <a name="GoogleCloudfunctions2FunctionServiceConfig" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionServiceConfig: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.allTrafficOnLatestRevision">allTrafficOnLatestRevision</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether 100% of traffic is routed to the latest revision. Defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.availableCpu">availableCpu</a></code> | <code>string</code> | The number of CPUs used in a single container instance. Default value is calculated from available memory. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.availableMemory">availableMemory</a></code> | <code>string</code> | The amount of memory available for a function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variables that shall be available during function execution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.ingressSettings">ingressSettings</a></code> | <code>string</code> | Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.maxInstanceRequestConcurrency">maxInstanceRequestConcurrency</a></code> | <code>number</code> | Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>[]</code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.secretVolumes">secretVolumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes">GoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>[]</code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.service">service</a></code> | <code>string</code> | Name of the service associated with a Function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The email of the service account for this function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | The function execution timeout. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.vpcConnector">vpcConnector</a></code> | <code>string</code> | The Serverless VPC Access connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>string</code> | Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]. |

---

##### `allTrafficOnLatestRevision`<sup>Optional</sup> <a name="allTrafficOnLatestRevision" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.allTrafficOnLatestRevision"></a>

```typescript
public readonly allTrafficOnLatestRevision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether 100% of traffic is routed to the latest revision. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#all_traffic_on_latest_revision GoogleCloudfunctions2Function#all_traffic_on_latest_revision}

---

##### `availableCpu`<sup>Optional</sup> <a name="availableCpu" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.availableCpu"></a>

```typescript
public readonly availableCpu: string;
```

- *Type:* string

The number of CPUs used in a single container instance. Default value is calculated from available memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#available_cpu GoogleCloudfunctions2Function#available_cpu}

---

##### `availableMemory`<sup>Optional</sup> <a name="availableMemory" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.availableMemory"></a>

```typescript
public readonly availableMemory: string;
```

- *Type:* string

The amount of memory available for a function.

Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#available_memory GoogleCloudfunctions2Function#available_memory}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables that shall be available during function execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#environment_variables GoogleCloudfunctions2Function#environment_variables}

---

##### `ingressSettings`<sup>Optional</sup> <a name="ingressSettings" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.ingressSettings"></a>

```typescript
public readonly ingressSettings: string;
```

- *Type:* string

Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#ingress_settings GoogleCloudfunctions2Function#ingress_settings}

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#max_instance_count GoogleCloudfunctions2Function#max_instance_count}

---

##### `maxInstanceRequestConcurrency`<sup>Optional</sup> <a name="maxInstanceRequestConcurrency" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.maxInstanceRequestConcurrency"></a>

```typescript
public readonly maxInstanceRequestConcurrency: number;
```

- *Type:* number

Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#max_instance_request_concurrency GoogleCloudfunctions2Function#max_instance_request_concurrency}

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#min_instance_count GoogleCloudfunctions2Function#min_instance_count}

---

##### `secretEnvironmentVariables`<sup>Optional</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.secretEnvironmentVariables"></a>

```typescript
public readonly secretEnvironmentVariables: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>[]

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#secret_environment_variables GoogleCloudfunctions2Function#secret_environment_variables}

---

##### `secretVolumes`<sup>Optional</sup> <a name="secretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.secretVolumes"></a>

```typescript
public readonly secretVolumes: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes">GoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>[]

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#secret_volumes GoogleCloudfunctions2Function#secret_volumes}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Name of the service associated with a Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#service GoogleCloudfunctions2Function#service}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The email of the service account for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#service_account_email GoogleCloudfunctions2Function#service_account_email}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

The function execution timeout.

Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#timeout_seconds GoogleCloudfunctions2Function#timeout_seconds}

---

##### `vpcConnector`<sup>Optional</sup> <a name="vpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.vpcConnector"></a>

```typescript
public readonly vpcConnector: string;
```

- *Type:* string

The Serverless VPC Access connector that this cloud function can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#vpc_connector GoogleCloudfunctions2Function#vpc_connector}

---

##### `vpcConnectorEgressSettings`<sup>Optional</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig.property.vpcConnectorEgressSettings"></a>

```typescript
public readonly vpcConnectorEgressSettings: string;
```

- *Type:* string

Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#vpc_connector_egress_settings GoogleCloudfunctions2Function#vpc_connector_egress_settings}

---

### GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables <a name="GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.key">key</a></code> | <code>string</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.projectId">projectId</a></code> | <code>string</code> | Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.secret">secret</a></code> | <code>string</code> | Name of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.version">version</a></code> | <code>string</code> | Version of the secret (version number or the string 'latest'). |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#key GoogleCloudfunctions2Function#key}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project identifier (preferably project number but can also be the project ID) of the project that contains the secret.

If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#project_id GoogleCloudfunctions2Function#project_id}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Name of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#secret GoogleCloudfunctions2Function#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the secret (version number or the string 'latest').

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#version GoogleCloudfunctions2Function#version}

---

### GoogleCloudfunctions2FunctionServiceConfigSecretVolumes <a name="GoogleCloudfunctions2FunctionServiceConfigSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionServiceConfigSecretVolumes: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes.property.mountPath">mountPath</a></code> | <code>string</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes.property.projectId">projectId</a></code> | <code>string</code> | Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes.property.secret">secret</a></code> | <code>string</code> | Name of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes.property.versions">versions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>[]</code> | versions block. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

The path within the container to mount the secret volume.

For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#mount_path GoogleCloudfunctions2Function#mount_path}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project identifier (preferably project number but can also be the project ID) of the project that contains the secret.

If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#project_id GoogleCloudfunctions2Function#project_id}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Name of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#secret GoogleCloudfunctions2Function#secret}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes.property.versions"></a>

```typescript
public readonly versions: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>[]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#versions GoogleCloudfunctions2Function#versions}

---

### GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions <a name="GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionServiceConfigSecretVolumesVersions: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.path">path</a></code> | <code>string</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.version">version</a></code> | <code>string</code> | Version of the secret (version number or the string 'latest'). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mountPath as '/etc/secrets' and path as secret_foo would mount the secret value file at /etc/secrets/secret_foo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#path GoogleCloudfunctions2Function#path}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the secret (version number or the string 'latest').

It is preferable to use latest version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#version GoogleCloudfunctions2Function#version}

---

### GoogleCloudfunctions2FunctionTimeouts <a name="GoogleCloudfunctions2FunctionTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

const googleCloudfunctions2FunctionTimeouts: googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#create GoogleCloudfunctions2Function#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#delete GoogleCloudfunctions2Function#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#update GoogleCloudfunctions2Function#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#create GoogleCloudfunctions2Function#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#delete GoogleCloudfunctions2Function#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloudfunctions2_function#update GoogleCloudfunctions2Function#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference <a name="GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy</a>

---


### GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference <a name="GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy</a>

---


### GoogleCloudfunctions2FunctionBuildConfigOutputReference <a name="GoogleCloudfunctions2FunctionBuildConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.putAutomaticUpdatePolicy">putAutomaticUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.putOnDeployUpdatePolicy">putOnDeployUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetAutomaticUpdatePolicy">resetAutomaticUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetDockerRepository">resetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetOnDeployUpdatePolicy">resetOnDeployUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomaticUpdatePolicy` <a name="putAutomaticUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.putAutomaticUpdatePolicy"></a>

```typescript
public putAutomaticUpdatePolicy(value: GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.putAutomaticUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy</a>

---

##### `putOnDeployUpdatePolicy` <a name="putOnDeployUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.putOnDeployUpdatePolicy"></a>

```typescript
public putOnDeployUpdatePolicy(value: GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.putOnDeployUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.putSource"></a>

```typescript
public putSource(value: GoogleCloudfunctions2FunctionBuildConfigSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource">GoogleCloudfunctions2FunctionBuildConfigSource</a>

---

##### `resetAutomaticUpdatePolicy` <a name="resetAutomaticUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetAutomaticUpdatePolicy"></a>

```typescript
public resetAutomaticUpdatePolicy(): void
```

##### `resetDockerRepository` <a name="resetDockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetDockerRepository"></a>

```typescript
public resetDockerRepository(): void
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetEntryPoint"></a>

```typescript
public resetEntryPoint(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetOnDeployUpdatePolicy` <a name="resetOnDeployUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetOnDeployUpdatePolicy"></a>

```typescript
public resetOnDeployUpdatePolicy(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.resetWorkerPool"></a>

```typescript
public resetWorkerPool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.automaticUpdatePolicy">automaticUpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference">GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.onDeployUpdatePolicy">onDeployUpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference">GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference">GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.automaticUpdatePolicyInput">automaticUpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepositoryInput">dockerRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.onDeployUpdatePolicyInput">onDeployUpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource">GoogleCloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPoolInput">workerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository">dockerRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint">entryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPool">workerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig">GoogleCloudfunctions2FunctionBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticUpdatePolicy`<sup>Required</sup> <a name="automaticUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.automaticUpdatePolicy"></a>

```typescript
public readonly automaticUpdatePolicy: GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference">GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference</a>

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: string;
```

- *Type:* string

---

##### `onDeployUpdatePolicy`<sup>Required</sup> <a name="onDeployUpdatePolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.onDeployUpdatePolicy"></a>

```typescript
public readonly onDeployUpdatePolicy: GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference">GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.source"></a>

```typescript
public readonly source: GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference">GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference</a>

---

##### `automaticUpdatePolicyInput`<sup>Optional</sup> <a name="automaticUpdatePolicyInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.automaticUpdatePolicyInput"></a>

```typescript
public readonly automaticUpdatePolicyInput: GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy</a>

---

##### `dockerRepositoryInput`<sup>Optional</sup> <a name="dockerRepositoryInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepositoryInput"></a>

```typescript
public readonly dockerRepositoryInput: string;
```

- *Type:* string

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPointInput"></a>

```typescript
public readonly entryPointInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onDeployUpdatePolicyInput`<sup>Optional</sup> <a name="onDeployUpdatePolicyInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.onDeployUpdatePolicyInput"></a>

```typescript
public readonly onDeployUpdatePolicyInput: GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy">GoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy</a>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: GoogleCloudfunctions2FunctionBuildConfigSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource">GoogleCloudfunctions2FunctionBuildConfigSource</a>

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPoolInput"></a>

```typescript
public readonly workerPoolInput: string;
```

- *Type:* string

---

##### `dockerRepository`<sup>Required</sup> <a name="dockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository"></a>

```typescript
public readonly dockerRepository: string;
```

- *Type:* string

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint"></a>

```typescript
public readonly entryPoint: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctions2FunctionBuildConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfig">GoogleCloudfunctions2FunctionBuildConfig</a>

---


### GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference <a name="GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource">putRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource">putStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resetRepoSource">resetRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resetStorageSource">resetStorageSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRepoSource` <a name="putRepoSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource"></a>

```typescript
public putRepoSource(value: GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---

##### `putStorageSource` <a name="putStorageSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource"></a>

```typescript
public putStorageSource(value: GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---

##### `resetRepoSource` <a name="resetRepoSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resetRepoSource"></a>

```typescript
public resetRepoSource(): void
```

##### `resetStorageSource` <a name="resetStorageSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resetStorageSource"></a>

```typescript
public resetStorageSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource">repoSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference">GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource">storageSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference">GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSourceInput">repoSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSourceInput">storageSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource">GoogleCloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repoSource`<sup>Required</sup> <a name="repoSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource"></a>

```typescript
public readonly repoSource: GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference">GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference</a>

---

##### `storageSource`<sup>Required</sup> <a name="storageSource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource"></a>

```typescript
public readonly storageSource: GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference">GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference</a>

---

##### `repoSourceInput`<sup>Optional</sup> <a name="repoSourceInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSourceInput"></a>

```typescript
public readonly repoSourceInput: GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---

##### `storageSourceInput`<sup>Optional</sup> <a name="storageSourceInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSourceInput"></a>

```typescript
public readonly storageSourceInput: GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctions2FunctionBuildConfigSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSource">GoogleCloudfunctions2FunctionBuildConfigSource</a>

---


### GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference <a name="GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetBranchName">resetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetDir">resetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetRepoName">resetRepoName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetTagName">resetTagName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchName` <a name="resetBranchName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetBranchName"></a>

```typescript
public resetBranchName(): void
```

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetCommitSha"></a>

```typescript
public resetCommitSha(): void
```

##### `resetDir` <a name="resetDir" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetDir"></a>

```typescript
public resetDir(): void
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetInvertRegex"></a>

```typescript
public resetInvertRegex(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRepoName` <a name="resetRepoName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetRepoName"></a>

```typescript
public resetRepoName(): void
```

##### `resetTagName` <a name="resetTagName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetTagName"></a>

```typescript
public resetTagName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dirInput">dirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoNameInput">repoNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagNameInput">tagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha">commitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir">dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex">invertRegex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName">repoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchNameInput"></a>

```typescript
public readonly branchNameInput: string;
```

- *Type:* string

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitShaInput"></a>

```typescript
public readonly commitShaInput: string;
```

- *Type:* string

---

##### `dirInput`<sup>Optional</sup> <a name="dirInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dirInput"></a>

```typescript
public readonly dirInput: string;
```

- *Type:* string

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegexInput"></a>

```typescript
public readonly invertRegexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `repoNameInput`<sup>Optional</sup> <a name="repoNameInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoNameInput"></a>

```typescript
public readonly repoNameInput: string;
```

- *Type:* string

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagNameInput"></a>

```typescript
public readonly tagNameInput: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex"></a>

```typescript
public readonly invertRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---


### GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference <a name="GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetGeneration"></a>

```typescript
public resetGeneration(): void
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetObject"></a>

```typescript
public resetObject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generationInput">generationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generationInput"></a>

```typescript
public readonly generationInput: number;
```

- *Type:* number

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---


### GoogleCloudfunctions2FunctionEventTriggerEventFiltersList <a name="GoogleCloudfunctions2FunctionEventTriggerEventFiltersList" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get"></a>

```typescript
public get(index: number): GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters">GoogleCloudfunctions2FunctionEventTriggerEventFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctions2FunctionEventTriggerEventFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters">GoogleCloudfunctions2FunctionEventTriggerEventFilters</a>[]

---


### GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference <a name="GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters">GoogleCloudfunctions2FunctionEventTriggerEventFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctions2FunctionEventTriggerEventFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters">GoogleCloudfunctions2FunctionEventTriggerEventFilters</a>

---


### GoogleCloudfunctions2FunctionEventTriggerOutputReference <a name="GoogleCloudfunctions2FunctionEventTriggerOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.putEventFilters">putEventFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetEventFilters">resetEventFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetEventType">resetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetTriggerRegion">resetTriggerRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventFilters` <a name="putEventFilters" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.putEventFilters"></a>

```typescript
public putEventFilters(value: IResolvable | GoogleCloudfunctions2FunctionEventTriggerEventFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.putEventFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters">GoogleCloudfunctions2FunctionEventTriggerEventFilters</a>[]

---

##### `resetEventFilters` <a name="resetEventFilters" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetEventFilters"></a>

```typescript
public resetEventFilters(): void
```

##### `resetEventType` <a name="resetEventType" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetEventType"></a>

```typescript
public resetEventType(): void
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetPubsubTopic"></a>

```typescript
public resetPubsubTopic(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetTriggerRegion` <a name="resetTriggerRegion" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.resetTriggerRegion"></a>

```typescript
public resetTriggerRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters">eventFilters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList">GoogleCloudfunctions2FunctionEventTriggerEventFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.trigger">trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFiltersInput">eventFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters">GoogleCloudfunctions2FunctionEventTriggerEventFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegionInput">triggerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy">retryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion">triggerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger">GoogleCloudfunctions2FunctionEventTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventFilters`<sup>Required</sup> <a name="eventFilters" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters"></a>

```typescript
public readonly eventFilters: GoogleCloudfunctions2FunctionEventTriggerEventFiltersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFiltersList">GoogleCloudfunctions2FunctionEventTriggerEventFiltersList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

---

##### `eventFiltersInput`<sup>Optional</sup> <a name="eventFiltersInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFiltersInput"></a>

```typescript
public readonly eventFiltersInput: IResolvable | GoogleCloudfunctions2FunctionEventTriggerEventFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerEventFilters">GoogleCloudfunctions2FunctionEventTriggerEventFilters</a>[]

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `triggerRegionInput`<sup>Optional</sup> <a name="triggerRegionInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegionInput"></a>

```typescript
public readonly triggerRegionInput: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `triggerRegion`<sup>Required</sup> <a name="triggerRegion" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion"></a>

```typescript
public readonly triggerRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctions2FunctionEventTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionEventTrigger">GoogleCloudfunctions2FunctionEventTrigger</a>

---


### GoogleCloudfunctions2FunctionServiceConfigOutputReference <a name="GoogleCloudfunctions2FunctionServiceConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables">putSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes">putSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetAllTrafficOnLatestRevision">resetAllTrafficOnLatestRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetAvailableCpu">resetAvailableCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetAvailableMemory">resetAvailableMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetIngressSettings">resetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceCount">resetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceRequestConcurrency">resetMaxInstanceRequestConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetMinInstanceCount">resetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetSecretEnvironmentVariables">resetSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetSecretVolumes">resetSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnector">resetVpcConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnectorEgressSettings">resetVpcConnectorEgressSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretEnvironmentVariables` <a name="putSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables"></a>

```typescript
public putSecretEnvironmentVariables(value: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>[]

---

##### `putSecretVolumes` <a name="putSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes"></a>

```typescript
public putSecretVolumes(value: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes">GoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>[]

---

##### `resetAllTrafficOnLatestRevision` <a name="resetAllTrafficOnLatestRevision" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetAllTrafficOnLatestRevision"></a>

```typescript
public resetAllTrafficOnLatestRevision(): void
```

##### `resetAvailableCpu` <a name="resetAvailableCpu" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetAvailableCpu"></a>

```typescript
public resetAvailableCpu(): void
```

##### `resetAvailableMemory` <a name="resetAvailableMemory" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetAvailableMemory"></a>

```typescript
public resetAvailableMemory(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetIngressSettings` <a name="resetIngressSettings" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetIngressSettings"></a>

```typescript
public resetIngressSettings(): void
```

##### `resetMaxInstanceCount` <a name="resetMaxInstanceCount" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceCount"></a>

```typescript
public resetMaxInstanceCount(): void
```

##### `resetMaxInstanceRequestConcurrency` <a name="resetMaxInstanceRequestConcurrency" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceRequestConcurrency"></a>

```typescript
public resetMaxInstanceRequestConcurrency(): void
```

##### `resetMinInstanceCount` <a name="resetMinInstanceCount" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetMinInstanceCount"></a>

```typescript
public resetMinInstanceCount(): void
```

##### `resetSecretEnvironmentVariables` <a name="resetSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetSecretEnvironmentVariables"></a>

```typescript
public resetSecretEnvironmentVariables(): void
```

##### `resetSecretVolumes` <a name="resetSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetSecretVolumes"></a>

```typescript
public resetSecretVolumes(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```

##### `resetVpcConnector` <a name="resetVpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnector"></a>

```typescript
public resetVpcConnector(): void
```

##### `resetVpcConnectorEgressSettings` <a name="resetVpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnectorEgressSettings"></a>

```typescript
public resetVpcConnectorEgressSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri">gcfUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes">secretVolumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevisionInput">allTrafficOnLatestRevisionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpuInput">availableCpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemoryInput">availableMemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettingsInput">ingressSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrencyInput">maxInstanceRequestConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariablesInput">secretEnvironmentVariablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumesInput">secretVolumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes">GoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettingsInput">vpcConnectorEgressSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorInput">vpcConnectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision">allTrafficOnLatestRevision</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu">availableCpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory">availableMemory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings">ingressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency">maxInstanceRequestConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector">vpcConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig">GoogleCloudfunctions2FunctionServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcfUri`<sup>Required</sup> <a name="gcfUri" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri"></a>

```typescript
public readonly gcfUri: string;
```

- *Type:* string

---

##### `secretEnvironmentVariables`<sup>Required</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables"></a>

```typescript
public readonly secretEnvironmentVariables: GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a>

---

##### `secretVolumes`<sup>Required</sup> <a name="secretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes"></a>

```typescript
public readonly secretVolumes: GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `allTrafficOnLatestRevisionInput`<sup>Optional</sup> <a name="allTrafficOnLatestRevisionInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevisionInput"></a>

```typescript
public readonly allTrafficOnLatestRevisionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availableCpuInput`<sup>Optional</sup> <a name="availableCpuInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpuInput"></a>

```typescript
public readonly availableCpuInput: string;
```

- *Type:* string

---

##### `availableMemoryInput`<sup>Optional</sup> <a name="availableMemoryInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemoryInput"></a>

```typescript
public readonly availableMemoryInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ingressSettingsInput`<sup>Optional</sup> <a name="ingressSettingsInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettingsInput"></a>

```typescript
public readonly ingressSettingsInput: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `maxInstanceRequestConcurrencyInput`<sup>Optional</sup> <a name="maxInstanceRequestConcurrencyInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrencyInput"></a>

```typescript
public readonly maxInstanceRequestConcurrencyInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `secretEnvironmentVariablesInput`<sup>Optional</sup> <a name="secretEnvironmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariablesInput"></a>

```typescript
public readonly secretEnvironmentVariablesInput: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>[]

---

##### `secretVolumesInput`<sup>Optional</sup> <a name="secretVolumesInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumesInput"></a>

```typescript
public readonly secretVolumesInput: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes">GoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>[]

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `vpcConnectorEgressSettingsInput`<sup>Optional</sup> <a name="vpcConnectorEgressSettingsInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettingsInput"></a>

```typescript
public readonly vpcConnectorEgressSettingsInput: string;
```

- *Type:* string

---

##### `vpcConnectorInput`<sup>Optional</sup> <a name="vpcConnectorInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorInput"></a>

```typescript
public readonly vpcConnectorInput: string;
```

- *Type:* string

---

##### `allTrafficOnLatestRevision`<sup>Required</sup> <a name="allTrafficOnLatestRevision" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision"></a>

```typescript
public readonly allTrafficOnLatestRevision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availableCpu`<sup>Required</sup> <a name="availableCpu" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu"></a>

```typescript
public readonly availableCpu: string;
```

- *Type:* string

---

##### `availableMemory`<sup>Required</sup> <a name="availableMemory" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory"></a>

```typescript
public readonly availableMemory: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ingressSettings`<sup>Required</sup> <a name="ingressSettings" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings"></a>

```typescript
public readonly ingressSettings: string;
```

- *Type:* string

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `maxInstanceRequestConcurrency`<sup>Required</sup> <a name="maxInstanceRequestConcurrency" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency"></a>

```typescript
public readonly maxInstanceRequestConcurrency: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `vpcConnector`<sup>Required</sup> <a name="vpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector"></a>

```typescript
public readonly vpcConnector: string;
```

- *Type:* string

---

##### `vpcConnectorEgressSettings`<sup>Required</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings"></a>

```typescript
public readonly vpcConnectorEgressSettings: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctions2FunctionServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfig">GoogleCloudfunctions2FunctionServiceConfig</a>

---


### GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList <a name="GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>[]

---


### GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference <a name="GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">GoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>

---


### GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList <a name="GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get"></a>

```typescript
public get(index: number): GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes">GoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes">GoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>[]

---


### GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference <a name="GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions">putVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resetVersions">resetVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVersions` <a name="putVersions" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions"></a>

```typescript
public putVersions(value: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>[]

---

##### `resetVersions` <a name="resetVersions" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resetVersions"></a>

```typescript
public resetVersions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versionsInput">versionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes">GoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions"></a>

```typescript
public readonly versions: GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versionsInput"></a>

```typescript
public readonly versionsInput: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>[]

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumes">GoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>

---


### GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList <a name="GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get"></a>

```typescript
public get(index: number): GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>[]

---


### GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference <a name="GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">GoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>

---


### GoogleCloudfunctions2FunctionTimeoutsOutputReference <a name="GoogleCloudfunctions2FunctionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctions2Function } from '@cdktf/provider-google-beta'

new googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts">GoogleCloudfunctions2FunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctions2FunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctions2Function.GoogleCloudfunctions2FunctionTimeouts">GoogleCloudfunctions2FunctionTimeouts</a>

---



