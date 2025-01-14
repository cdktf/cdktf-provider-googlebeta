# `googleBigqueryRoutine` Submodule <a name="`googleBigqueryRoutine` Submodule" id="@cdktf/provider-google-beta.googleBigqueryRoutine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryRoutine <a name="GoogleBigqueryRoutine" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine google_bigquery_routine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutine(scope: Construct, id: string, config: GoogleBigqueryRoutineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig">GoogleBigqueryRoutineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig">GoogleBigqueryRoutineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments">putArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putRemoteFunctionOptions">putRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putSparkOptions">putSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDataGovernanceType">resetDataGovernanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeterminismLevel">resetDeterminismLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetImportedLibraries">resetImportedLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetRemoteFunctionOptions">resetRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnTableType">resetReturnTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnType">resetReturnType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetSparkOptions">resetSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArguments` <a name="putArguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments"></a>

```typescript
public putArguments(value: IResolvable | GoogleBigqueryRoutineArguments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]

---

##### `putRemoteFunctionOptions` <a name="putRemoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putRemoteFunctionOptions"></a>

```typescript
public putRemoteFunctionOptions(value: GoogleBigqueryRoutineRemoteFunctionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putRemoteFunctionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

---

##### `putSparkOptions` <a name="putSparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putSparkOptions"></a>

```typescript
public putSparkOptions(value: GoogleBigqueryRoutineSparkOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putSparkOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryRoutineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetDataGovernanceType` <a name="resetDataGovernanceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDataGovernanceType"></a>

```typescript
public resetDataGovernanceType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeterminismLevel` <a name="resetDeterminismLevel" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeterminismLevel"></a>

```typescript
public resetDeterminismLevel(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportedLibraries` <a name="resetImportedLibraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetImportedLibraries"></a>

```typescript
public resetImportedLibraries(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRemoteFunctionOptions` <a name="resetRemoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetRemoteFunctionOptions"></a>

```typescript
public resetRemoteFunctionOptions(): void
```

##### `resetReturnTableType` <a name="resetReturnTableType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnTableType"></a>

```typescript
public resetReturnTableType(): void
```

##### `resetReturnType` <a name="resetReturnType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnType"></a>

```typescript
public resetReturnType(): void
```

##### `resetSparkOptions` <a name="resetSparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetSparkOptions"></a>

```typescript
public resetSparkOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryRoutine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryRoutine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryRoutine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryRoutine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryRoutine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList">GoogleBigqueryRoutineArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptions">remoteFunctionOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference">GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptions">sparkOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference">GoogleBigqueryRoutineSparkOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference">GoogleBigqueryRoutineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.argumentsInput">argumentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceTypeInput">dataGovernanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBodyInput">definitionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevelInput">determinismLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibrariesInput">importedLibrariesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptionsInput">remoteFunctionOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableTypeInput">returnTableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTypeInput">returnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineIdInput">routineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineTypeInput">routineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptionsInput">sparkOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceType">dataGovernanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBody">definitionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevel">determinismLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibraries">importedLibraries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableType">returnTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnType">returnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineId">routineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineType">routineType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.arguments"></a>

```typescript
public readonly arguments: GoogleBigqueryRoutineArgumentsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList">GoogleBigqueryRoutineArgumentsList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `remoteFunctionOptions`<sup>Required</sup> <a name="remoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptions"></a>

```typescript
public readonly remoteFunctionOptions: GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference">GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference</a>

---

##### `sparkOptions`<sup>Required</sup> <a name="sparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptions"></a>

```typescript
public readonly sparkOptions: GoogleBigqueryRoutineSparkOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference">GoogleBigqueryRoutineSparkOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryRoutineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference">GoogleBigqueryRoutineTimeoutsOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: IResolvable | GoogleBigqueryRoutineArguments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]

---

##### `dataGovernanceTypeInput`<sup>Optional</sup> <a name="dataGovernanceTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceTypeInput"></a>

```typescript
public readonly dataGovernanceTypeInput: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `definitionBodyInput`<sup>Optional</sup> <a name="definitionBodyInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBodyInput"></a>

```typescript
public readonly definitionBodyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `determinismLevelInput`<sup>Optional</sup> <a name="determinismLevelInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevelInput"></a>

```typescript
public readonly determinismLevelInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importedLibrariesInput`<sup>Optional</sup> <a name="importedLibrariesInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibrariesInput"></a>

```typescript
public readonly importedLibrariesInput: string[];
```

- *Type:* string[]

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `remoteFunctionOptionsInput`<sup>Optional</sup> <a name="remoteFunctionOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptionsInput"></a>

```typescript
public readonly remoteFunctionOptionsInput: GoogleBigqueryRoutineRemoteFunctionOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

---

##### `returnTableTypeInput`<sup>Optional</sup> <a name="returnTableTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableTypeInput"></a>

```typescript
public readonly returnTableTypeInput: string;
```

- *Type:* string

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTypeInput"></a>

```typescript
public readonly returnTypeInput: string;
```

- *Type:* string

---

##### `routineIdInput`<sup>Optional</sup> <a name="routineIdInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineIdInput"></a>

```typescript
public readonly routineIdInput: string;
```

- *Type:* string

---

##### `routineTypeInput`<sup>Optional</sup> <a name="routineTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineTypeInput"></a>

```typescript
public readonly routineTypeInput: string;
```

- *Type:* string

---

##### `sparkOptionsInput`<sup>Optional</sup> <a name="sparkOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptionsInput"></a>

```typescript
public readonly sparkOptionsInput: GoogleBigqueryRoutineSparkOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryRoutineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

---

##### `dataGovernanceType`<sup>Required</sup> <a name="dataGovernanceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceType"></a>

```typescript
public readonly dataGovernanceType: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `definitionBody`<sup>Required</sup> <a name="definitionBody" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBody"></a>

```typescript
public readonly definitionBody: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `determinismLevel`<sup>Required</sup> <a name="determinismLevel" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevel"></a>

```typescript
public readonly determinismLevel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importedLibraries`<sup>Required</sup> <a name="importedLibraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibraries"></a>

```typescript
public readonly importedLibraries: string[];
```

- *Type:* string[]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `returnTableType`<sup>Required</sup> <a name="returnTableType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableType"></a>

```typescript
public readonly returnTableType: string;
```

- *Type:* string

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineId"></a>

```typescript
public readonly routineId: string;
```

- *Type:* string

---

##### `routineType`<sup>Required</sup> <a name="routineType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineType"></a>

```typescript
public readonly routineType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryRoutineArguments <a name="GoogleBigqueryRoutineArguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

const googleBigqueryRoutineArguments: googleBigqueryRoutine.GoogleBigqueryRoutineArguments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.argumentKind">argumentKind</a></code> | <code>string</code> | Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.dataType">dataType</a></code> | <code>string</code> | A JSON schema for the data type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.mode">mode</a></code> | <code>string</code> | Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.name">name</a></code> | <code>string</code> | The name of this argument. Can be absent for function return argument. |

---

##### `argumentKind`<sup>Optional</sup> <a name="argumentKind" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.argumentKind"></a>

```typescript
public readonly argumentKind: string;
```

- *Type:* string

Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#argument_kind GoogleBigqueryRoutine#argument_kind}

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

A JSON schema for the data type.

Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#data_type GoogleBigqueryRoutine#data_type}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#mode GoogleBigqueryRoutine#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this argument. Can be absent for function return argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#name GoogleBigqueryRoutine#name}

---

### GoogleBigqueryRoutineConfig <a name="GoogleBigqueryRoutineConfig" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

const googleBigqueryRoutineConfig: googleBigqueryRoutine.GoogleBigqueryRoutineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.definitionBody">definitionBody</a></code> | <code>string</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineId">routineId</a></code> | <code>string</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineType">routineType</a></code> | <code>string</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.arguments">arguments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]</code> | arguments block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dataGovernanceType">dataGovernanceType</a></code> | <code>string</code> | If set to DATA_MASKING, the function is validated and made available as a masking function. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.description">description</a></code> | <code>string</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.determinismLevel">determinismLevel</a></code> | <code>string</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.importedLibraries">importedLibraries</a></code> | <code>string[]</code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.language">language</a></code> | <code>string</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.remoteFunctionOptions">remoteFunctionOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a></code> | remote_function_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnTableType">returnTableType</a></code> | <code>string</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnType">returnType</a></code> | <code>string</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.sparkOptions">sparkOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a></code> | spark_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#dataset_id GoogleBigqueryRoutine#dataset_id}

---

##### `definitionBody`<sup>Required</sup> <a name="definitionBody" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.definitionBody"></a>

```typescript
public readonly definitionBody: string;
```

- *Type:* string

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#definition_body GoogleBigqueryRoutine#definition_body}

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineId"></a>

```typescript
public readonly routineId: string;
```

- *Type:* string

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#routine_id GoogleBigqueryRoutine#routine_id}

---

##### `routineType`<sup>Required</sup> <a name="routineType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineType"></a>

```typescript
public readonly routineType: string;
```

- *Type:* string

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#routine_type GoogleBigqueryRoutine#routine_type}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.arguments"></a>

```typescript
public readonly arguments: IResolvable | GoogleBigqueryRoutineArguments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#arguments GoogleBigqueryRoutine#arguments}

---

##### `dataGovernanceType`<sup>Optional</sup> <a name="dataGovernanceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dataGovernanceType"></a>

```typescript
public readonly dataGovernanceType: string;
```

- *Type:* string

If set to DATA_MASKING, the function is validated and made available as a masking function.

For more information, see https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#data_governance_type GoogleBigqueryRoutine#data_governance_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#description GoogleBigqueryRoutine#description}

---

##### `determinismLevel`<sup>Optional</sup> <a name="determinismLevel" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.determinismLevel"></a>

```typescript
public readonly determinismLevel: string;
```

- *Type:* string

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#determinism_level GoogleBigqueryRoutine#determinism_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importedLibraries`<sup>Optional</sup> <a name="importedLibraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.importedLibraries"></a>

```typescript
public readonly importedLibraries: string[];
```

- *Type:* string[]

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#imported_libraries GoogleBigqueryRoutine#imported_libraries}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#language GoogleBigqueryRoutine#language}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}.

---

##### `remoteFunctionOptions`<sup>Optional</sup> <a name="remoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.remoteFunctionOptions"></a>

```typescript
public readonly remoteFunctionOptions: GoogleBigqueryRoutineRemoteFunctionOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

remote_function_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#remote_function_options GoogleBigqueryRoutine#remote_function_options}

---

##### `returnTableType`<sup>Optional</sup> <a name="returnTableType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnTableType"></a>

```typescript
public readonly returnTableType: string;
```

- *Type:* string

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#return_table_type GoogleBigqueryRoutine#return_table_type}

---

##### `returnType`<sup>Optional</sup> <a name="returnType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

A JSON schema for the return type.

Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#return_type GoogleBigqueryRoutine#return_type}

---

##### `sparkOptions`<sup>Optional</sup> <a name="sparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.sparkOptions"></a>

```typescript
public readonly sparkOptions: GoogleBigqueryRoutineSparkOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

spark_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#spark_options GoogleBigqueryRoutine#spark_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryRoutineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#timeouts GoogleBigqueryRoutine#timeouts}

---

### GoogleBigqueryRoutineRemoteFunctionOptions <a name="GoogleBigqueryRoutineRemoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

const googleBigqueryRoutineRemoteFunctionOptions: googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.connection">connection</a></code> | <code>string</code> | Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.endpoint">endpoint</a></code> | <code>string</code> | Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows">maxBatchingRows</a></code> | <code>string</code> | Max number of rows in each batch sent to the remote service. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.userDefinedContext">userDefinedContext</a></code> | <code>{[ key: string ]: string}</code> | User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service.

Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#connection GoogleBigqueryRoutine#connection}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#endpoint GoogleBigqueryRoutine#endpoint}

---

##### `maxBatchingRows`<sup>Optional</sup> <a name="maxBatchingRows" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows"></a>

```typescript
public readonly maxBatchingRows: string;
```

- *Type:* string

Max number of rows in each batch sent to the remote service.

If absent or if 0,
BigQuery dynamically decides the number of rows in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#max_batching_rows GoogleBigqueryRoutine#max_batching_rows}

---

##### `userDefinedContext`<sup>Optional</sup> <a name="userDefinedContext" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.userDefinedContext"></a>

```typescript
public readonly userDefinedContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service.

The total number of bytes of keys and values must be less than 8KB.

An object containing a list of "key": value pairs. Example:
'{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#user_defined_context GoogleBigqueryRoutine#user_defined_context}

---

### GoogleBigqueryRoutineSparkOptions <a name="GoogleBigqueryRoutineSparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

const googleBigqueryRoutineSparkOptions: googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | Archive files to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.connection">connection</a></code> | <code>string</code> | Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.containerImage">containerImage</a></code> | <code>string</code> | Custom container image for the runtime environment. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.fileUris">fileUris</a></code> | <code>string[]</code> | Files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.jarUris">jarUris</a></code> | <code>string[]</code> | JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainClass">mainClass</a></code> | <code>string</code> | The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainFileUri">mainFileUri</a></code> | <code>string</code> | The main file/jar URI of the Spark application. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.pyFileUris">pyFileUris</a></code> | <code>string[]</code> | Python files to be placed on the PYTHONPATH for PySpark application. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Runtime version. If not specified, the default runtime version is used. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

Archive files to be extracted into the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#archive_uris GoogleBigqueryRoutine#archive_uris}

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#connection GoogleBigqueryRoutine#connection}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string

Custom container image for the runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#container_image GoogleBigqueryRoutine#container_image}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

Files to be placed in the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#file_uris GoogleBigqueryRoutine#file_uris}

---

##### `jarUris`<sup>Optional</sup> <a name="jarUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.jarUris"></a>

```typescript
public readonly jarUris: string[];
```

- *Type:* string[]

JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#jar_uris GoogleBigqueryRoutine#jar_uris}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#main_class GoogleBigqueryRoutine#main_class}

---

##### `mainFileUri`<sup>Optional</sup> <a name="mainFileUri" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainFileUri"></a>

```typescript
public readonly mainFileUri: string;
```

- *Type:* string

The main file/jar URI of the Spark application.

Exactly one of the definitionBody field and the mainFileUri field must be set for Python.
Exactly one of mainClass and mainFileUri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#main_file_uri GoogleBigqueryRoutine#main_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Configuration properties as a set of key/value pairs, which will be passed on to the Spark application.

For more information, see Apache Spark and the procedure option list.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#properties GoogleBigqueryRoutine#properties}

---

##### `pyFileUris`<sup>Optional</sup> <a name="pyFileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.pyFileUris"></a>

```typescript
public readonly pyFileUris: string[];
```

- *Type:* string[]

Python files to be placed on the PYTHONPATH for PySpark application.

Supported file types: .py, .egg, and .zip. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#py_file_uris GoogleBigqueryRoutine#py_file_uris}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Runtime version. If not specified, the default runtime version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#runtime_version GoogleBigqueryRoutine#runtime_version}

---

### GoogleBigqueryRoutineTimeouts <a name="GoogleBigqueryRoutineTimeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

const googleBigqueryRoutineTimeouts: googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#create GoogleBigqueryRoutine#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#delete GoogleBigqueryRoutine#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#update GoogleBigqueryRoutine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#create GoogleBigqueryRoutine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#delete GoogleBigqueryRoutine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_routine#update GoogleBigqueryRoutine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryRoutineArgumentsList <a name="GoogleBigqueryRoutineArgumentsList" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get"></a>

```typescript
public get(index: number): GoogleBigqueryRoutineArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryRoutineArguments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]

---


### GoogleBigqueryRoutineArgumentsOutputReference <a name="GoogleBigqueryRoutineArgumentsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetArgumentKind">resetArgumentKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgumentKind` <a name="resetArgumentKind" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetArgumentKind"></a>

```typescript
public resetArgumentKind(): void
```

##### `resetDataType` <a name="resetDataType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKindInput">argumentKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKind">argumentKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argumentKindInput`<sup>Optional</sup> <a name="argumentKindInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKindInput"></a>

```typescript
public readonly argumentKindInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `argumentKind`<sup>Required</sup> <a name="argumentKind" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKind"></a>

```typescript
public readonly argumentKind: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryRoutineArguments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>

---


### GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference <a name="GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows">resetMaxBatchingRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext">resetUserDefinedContext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnection` <a name="resetConnection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection"></a>

```typescript
public resetConnection(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetMaxBatchingRows` <a name="resetMaxBatchingRows" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows"></a>

```typescript
public resetMaxBatchingRows(): void
```

##### `resetUserDefinedContext` <a name="resetUserDefinedContext" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext"></a>

```typescript
public resetUserDefinedContext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput">connectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput">maxBatchingRowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput">userDefinedContextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows">maxBatchingRows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext">userDefinedContext</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput"></a>

```typescript
public readonly connectionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `maxBatchingRowsInput`<sup>Optional</sup> <a name="maxBatchingRowsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput"></a>

```typescript
public readonly maxBatchingRowsInput: string;
```

- *Type:* string

---

##### `userDefinedContextInput`<sup>Optional</sup> <a name="userDefinedContextInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput"></a>

```typescript
public readonly userDefinedContextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `maxBatchingRows`<sup>Required</sup> <a name="maxBatchingRows" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows"></a>

```typescript
public readonly maxBatchingRows: string;
```

- *Type:* string

---

##### `userDefinedContext`<sup>Required</sup> <a name="userDefinedContext" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext"></a>

```typescript
public readonly userDefinedContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryRoutineRemoteFunctionOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

---


### GoogleBigqueryRoutineSparkOptionsOutputReference <a name="GoogleBigqueryRoutineSparkOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetJarUris">resetJarUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainFileUri">resetMainFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetPyFileUris">resetPyFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetArchiveUris"></a>

```typescript
public resetArchiveUris(): void
```

##### `resetConnection` <a name="resetConnection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetConnection"></a>

```typescript
public resetConnection(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetFileUris"></a>

```typescript
public resetFileUris(): void
```

##### `resetJarUris` <a name="resetJarUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetJarUris"></a>

```typescript
public resetJarUris(): void
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainClass"></a>

```typescript
public resetMainClass(): void
```

##### `resetMainFileUri` <a name="resetMainFileUri" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainFileUri"></a>

```typescript
public resetMainFileUri(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetPyFileUris` <a name="resetPyFileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetPyFileUris"></a>

```typescript
public resetPyFileUris(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connectionInput">connectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImageInput">containerImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput">jarUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput">mainFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput">pyFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImage">containerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUris">fileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUris">jarUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClass">mainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUri">mainFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUris">pyFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput"></a>

```typescript
public readonly archiveUrisInput: string[];
```

- *Type:* string[]

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connectionInput"></a>

```typescript
public readonly connectionInput: string;
```

- *Type:* string

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: string;
```

- *Type:* string

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput"></a>

```typescript
public readonly fileUrisInput: string[];
```

- *Type:* string[]

---

##### `jarUrisInput`<sup>Optional</sup> <a name="jarUrisInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput"></a>

```typescript
public readonly jarUrisInput: string[];
```

- *Type:* string[]

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClassInput"></a>

```typescript
public readonly mainClassInput: string;
```

- *Type:* string

---

##### `mainFileUriInput`<sup>Optional</sup> <a name="mainFileUriInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput"></a>

```typescript
public readonly mainFileUriInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pyFileUrisInput`<sup>Optional</sup> <a name="pyFileUrisInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput"></a>

```typescript
public readonly pyFileUrisInput: string[];
```

- *Type:* string[]

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

---

##### `jarUris`<sup>Required</sup> <a name="jarUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUris"></a>

```typescript
public readonly jarUris: string[];
```

- *Type:* string[]

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

---

##### `mainFileUri`<sup>Required</sup> <a name="mainFileUri" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUri"></a>

```typescript
public readonly mainFileUri: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pyFileUris`<sup>Required</sup> <a name="pyFileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUris"></a>

```typescript
public readonly pyFileUris: string[];
```

- *Type:* string[]

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryRoutineSparkOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

---


### GoogleBigqueryRoutineTimeoutsOutputReference <a name="GoogleBigqueryRoutineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktf/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryRoutineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

---



