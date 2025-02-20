# `googleWorkflowsWorkflow` Submodule <a name="`googleWorkflowsWorkflow` Submodule" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkflowsWorkflow <a name="GoogleWorkflowsWorkflow" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow google_workflows_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer"></a>

```typescript
import { googleWorkflowsWorkflow } from '@cdktf/provider-google-beta'

new googleWorkflowsWorkflow.GoogleWorkflowsWorkflow(scope: Construct, id: string, config?: GoogleWorkflowsWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig">GoogleWorkflowsWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig">GoogleWorkflowsWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetCallLogLevel">resetCallLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetSourceContents">resetSourceContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetUserEnvVars">resetUserEnvVars</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleWorkflowsWorkflowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a>

---

##### `resetCallLogLevel` <a name="resetCallLogLevel" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetCallLogLevel"></a>

```typescript
public resetCallLogLevel(): void
```

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetCryptoKeyName"></a>

```typescript
public resetCryptoKeyName(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetSourceContents` <a name="resetSourceContents" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetSourceContents"></a>

```typescript
public resetSourceContents(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserEnvVars` <a name="resetUserEnvVars" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetUserEnvVars"></a>

```typescript
public resetUserEnvVars(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleWorkflowsWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isConstruct"></a>

```typescript
import { googleWorkflowsWorkflow } from '@cdktf/provider-google-beta'

googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformElement"></a>

```typescript
import { googleWorkflowsWorkflow } from '@cdktf/provider-google-beta'

googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformResource"></a>

```typescript
import { googleWorkflowsWorkflow } from '@cdktf/provider-google-beta'

googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport"></a>

```typescript
import { googleWorkflowsWorkflow } from '@cdktf/provider-google-beta'

googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleWorkflowsWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleWorkflowsWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleWorkflowsWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleWorkflowsWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference">GoogleWorkflowsWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.callLogLevelInput">callLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.sourceContentsInput">sourceContentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.userEnvVarsInput">userEnvVarsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.callLogLevel">callLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.sourceContents">sourceContents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.userEnvVars">userEnvVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkflowsWorkflowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference">GoogleWorkflowsWorkflowTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `callLogLevelInput`<sup>Optional</sup> <a name="callLogLevelInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.callLogLevelInput"></a>

```typescript
public readonly callLogLevelInput: string;
```

- *Type:* string

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cryptoKeyNameInput"></a>

```typescript
public readonly cryptoKeyNameInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `sourceContentsInput`<sup>Optional</sup> <a name="sourceContentsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.sourceContentsInput"></a>

```typescript
public readonly sourceContentsInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleWorkflowsWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a>

---

##### `userEnvVarsInput`<sup>Optional</sup> <a name="userEnvVarsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.userEnvVarsInput"></a>

```typescript
public readonly userEnvVarsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `callLogLevel`<sup>Required</sup> <a name="callLogLevel" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.callLogLevel"></a>

```typescript
public readonly callLogLevel: string;
```

- *Type:* string

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `sourceContents`<sup>Required</sup> <a name="sourceContents" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.sourceContents"></a>

```typescript
public readonly sourceContents: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userEnvVars`<sup>Required</sup> <a name="userEnvVars" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.userEnvVars"></a>

```typescript
public readonly userEnvVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkflowsWorkflowConfig <a name="GoogleWorkflowsWorkflowConfig" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.Initializer"></a>

```typescript
import { googleWorkflowsWorkflow } from '@cdktf/provider-google-beta'

const googleWorkflowsWorkflowConfig: googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.callLogLevel">callLogLevel</a></code> | <code>string</code> | Describes the level of platform logging to apply to calls and call responses during executions of this workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | The KMS key used to encrypt workflow and execution data. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.description">description</a></code> | <code>string</code> | Description of the workflow provided by the user. Must be at most 1000 unicode characters long. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#id GoogleWorkflowsWorkflow#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this Workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.name">name</a></code> | <code>string</code> | Name of the Workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#name_prefix GoogleWorkflowsWorkflow#name_prefix}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#project GoogleWorkflowsWorkflow#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.region">region</a></code> | <code>string</code> | The region of the workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Name of the service account associated with the latest workflow version. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.sourceContents">sourceContents</a></code> | <code>string</code> | Workflow code to be executed. The size limit is 128KB. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.userEnvVars">userEnvVars</a></code> | <code>{[ key: string ]: string}</code> | User-defined environment variables associated with this workflow revision. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `callLogLevel`<sup>Optional</sup> <a name="callLogLevel" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.callLogLevel"></a>

```typescript
public readonly callLogLevel: string;
```

- *Type:* string

Describes the level of platform logging to apply to calls and call responses during executions of this workflow.

If both the workflow and the execution specify a logging level,
the execution level takes precedence. Possible values: ["CALL_LOG_LEVEL_UNSPECIFIED", "LOG_ALL_CALLS", "LOG_ERRORS_ONLY", "LOG_NONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#call_log_level GoogleWorkflowsWorkflow#call_log_level}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

The KMS key used to encrypt workflow and execution data.

Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#crypto_key_name GoogleWorkflowsWorkflow#crypto_key_name}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Terraform will be prevented from destroying the workflow.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the workflow,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the workflow will fail.
When the field is set to false, deleting the workflow is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#deletion_protection GoogleWorkflowsWorkflow#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the workflow provided by the user. Must be at most 1000 unicode characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#description GoogleWorkflowsWorkflow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#id GoogleWorkflowsWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this Workflow.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#labels GoogleWorkflowsWorkflow#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#name GoogleWorkflowsWorkflow#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#name_prefix GoogleWorkflowsWorkflow#name_prefix}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#project GoogleWorkflowsWorkflow#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#region GoogleWorkflowsWorkflow#region}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Name of the service account associated with the latest workflow version.

This service
account represents the identity of the workflow and determines what permissions the workflow has.
Format: projects/{project}/serviceAccounts/{account} or {account}.
Using - as a wildcard for the {project} or not providing one at all will infer the project from the account.
The {account} value can be the email address or the unique_id of the service account.
If not provided, workflow will use the project's default service account.
Modifying this field for an existing workflow results in a new workflow revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#service_account GoogleWorkflowsWorkflow#service_account}

---

##### `sourceContents`<sup>Optional</sup> <a name="sourceContents" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.sourceContents"></a>

```typescript
public readonly sourceContents: string;
```

- *Type:* string

Workflow code to be executed. The size limit is 128KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#source_contents GoogleWorkflowsWorkflow#source_contents}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource manager tags.

Resource manager tag keys and values have the same definition
as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in
the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#tags GoogleWorkflowsWorkflow#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkflowsWorkflowTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#timeouts GoogleWorkflowsWorkflow#timeouts}

---

##### `userEnvVars`<sup>Optional</sup> <a name="userEnvVars" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.userEnvVars"></a>

```typescript
public readonly userEnvVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined environment variables associated with this workflow revision.

This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with “GOOGLE” or “WORKFLOWS".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#user_env_vars GoogleWorkflowsWorkflow#user_env_vars}

---

### GoogleWorkflowsWorkflowTimeouts <a name="GoogleWorkflowsWorkflowTimeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.Initializer"></a>

```typescript
import { googleWorkflowsWorkflow } from '@cdktf/provider-google-beta'

const googleWorkflowsWorkflowTimeouts: googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#create GoogleWorkflowsWorkflow#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#delete GoogleWorkflowsWorkflow#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#update GoogleWorkflowsWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#create GoogleWorkflowsWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#delete GoogleWorkflowsWorkflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_workflows_workflow#update GoogleWorkflowsWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkflowsWorkflowTimeoutsOutputReference <a name="GoogleWorkflowsWorkflowTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleWorkflowsWorkflow } from '@cdktf/provider-google-beta'

new googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkflowsWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a>

---



